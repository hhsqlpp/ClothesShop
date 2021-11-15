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
import { resetFilter, setFilter } from "../store/actions/filter";

export default function ProductPage() {
  let dispatch = useDispatch();
  let { products, loading, error } = useSelector((state) => state.product);
  let { filters } = useSelector((state) => state.filter);

  let { categoryName } = useParams();

  let [filteredProducts, setFilteredProducts] = useState(products);
  let [currentPage, setCurrentPage] = useState(1);
  let [productsPerPage] = useState(8);
  const [search, setSearch] = useState("");
  let [brandsFilter, setBrandsFilter] = useState({ all: true });
  let [colorsFilter, setColorsFilter] = useState({ allColors: true });

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

  const handleChangeColor = (e) => {
    setColorsFilter({
      ...colorsFilter,
      [e.target.value]: e.target.id,
    });

    if (filters.includes(e.target.id)) {
      dispatch(resetFilter(e.target.id));
    } else {
      dispatch(setFilter(e.target.id));
    }

    if (!filters.length) {
      setColorsFilter({
        ...colorsFilter,
        allColors: false,
      });
    }

    if (filters.includes("allColors")) {
      dispatch(resetFilter("allColors"));
    }
  };

  const handleChangeBrand = (e) => {
    setBrandsFilter({
      ...brandsFilter,
      [e.target.name]: e.target.checked,
    });

    if (filters.includes(e.target.name)) {
      dispatch(resetFilter(e.target.name));
    } else {
      dispatch(setFilter(e.target.name));
    }

    if (!filters.length) {
      setBrandsFilter({
        ...brandsFilter,
        all: false,
      });
    }

    if (filters.includes("all")) {
      dispatch(resetFilter("all"));
    }
  };

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
          <FilterBrand
            brandsFilter={brandsFilter}
            setBrandsFilter={setBrandsFilter}
            handleChangeBrand={handleChangeBrand}
          />
          <FilterColor
            colorsFilter={colorsFilter}
            setColorsFilter={setColorsFilter}
            handleChangeColor={handleChangeColor}
          />
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
