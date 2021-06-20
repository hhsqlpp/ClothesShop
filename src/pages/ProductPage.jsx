import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/actions/product";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import FilterBrand from "../components/FilterBrand";
import FilterColor from "../components/FilterColor";

export default function ProductPage() {
  let dispatch = useDispatch();
  let { products, loading } = useSelector((state) => state.product);
  let { categoryName } = useParams();
  let { filters } = useSelector((state) => state.filter);
  let [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    dispatch(fetchProduct(categoryName));
  }, [categoryName]);

  let heading = "";

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

  useEffect(() => {
    setFilteredProducts(
      products.filter((item) => {
        if (filters.length) {
          return filters.includes(item.brand)
        }

        return products;
      })
    );
  }, [filters.length, products.length]);

  return (
    <div className='main'>
      <h1>{heading}</h1>
      <div className='container'>
        <div className='product'>
          {!loading ? (
            <>
              {filteredProducts.map((item) => (
                <Product data={item} key={item.id} id={categoryName} />
              ))}
            </>
          ) : (
            <div>LOADING</div>
          )}
        </div>
        <div className='filter'>
          <FilterBrand products={products} />
          <FilterColor products={products} />
        </div>
      </div>
    </div>
  );
}
