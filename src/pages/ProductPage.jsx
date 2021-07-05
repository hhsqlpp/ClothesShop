import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/actions/product";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import FilterBrand from "../components/FilterBrand";
import FilterColor from "../components/FilterColor";
import Pagination from "./Pagination";
import Spinner from "../components/Spinner";
import ErrorBlock from "../components/ErrorBlock";
import FilterMenu from "../components/FilterMenu";

export default function ProductPage() {
  let dispatch = useDispatch();
  let { products, loading, error } = useSelector((state) => state.product);
  let { filters } = useSelector((state) => state.filter);

  let { categoryName } = useParams();

  let [filteredProducts, setFilteredProducts] = useState(products);
  let [currentPage, setCurrentPage] = useState(1);
  let [productsPerPage] = useState(8);
  const [search, setSearch] = useState("");

  let heading = "";

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProduct = products.slice(firstProductIndex, lastProductIndex);

  switch (categoryName) {
    case "shoes":
      heading = "Мужская Обувь";
      break;
    case "Tshirts":
      heading = "Мужские Футболки";
      break;
    case "trousers":
      heading = "Мужские Штаны";
      break;
    case "jackets":
      heading = "Мужские куртки";
      break;
    case "hoodies":
      heading = "Худи";
      break;
    default:
      heading = "";
      break;
  }

  const handleChange = (e) => setSearch(e.target.value);

  useEffect(() => {
    dispatch(fetchProduct(categoryName));
  }, [categoryName, dispatch]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setFilteredProducts(
      currentProduct.filter((item) => {
        if (filters.length) {
          return filters.includes(item.brand);
        } else if (search) {
          return item.name.toLowerCase().includes(search.toLowerCase());
        }

        return currentProduct;
      })
    );
  }, [filters.length, currentProduct.length, currentPage, products, search]);

  return (
    <div className='main'>
      <h1>{heading}</h1>
      <FilterMenu />
      <form className='search'>
        <input
          type='text'
          onChange={handleChange}
          placeholder='Поиск'
          value={search}
        />
      </form>
      <div className='container'>
        <div className='product'>
          {!error ? (
            !loading ? (
              <>
                {filteredProducts.map((item) => (
                  <Product data={item} key={item.id} id={categoryName} />
                ))}
              </>
            ) : (
              <Spinner />
            )
          ) : (
            <ErrorBlock />
          )}
        </div>
        <div className='filter'>
          <FilterBrand products={products} />
          <FilterColor products={products} />
        </div>
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  );
}
