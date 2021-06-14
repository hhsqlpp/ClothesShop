import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/actions/product";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import FilterBrand from "../components/FilterBrand";
import FilterColor from "../components/FilterColor";

export default function ProductPage() {
  let dispatch = useDispatch();
  let { product, loading } = useSelector((state) => state.product);
  let { productid } = useParams();

  useEffect(() => {
    dispatch(fetchProduct(productid));
  }, [productid]);

  let heading = "";

  switch (productid) {
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

  return (
    <div className='main'>
      <h1>{heading}</h1>
      <div className='container'>
        <div className='product'>
          {!loading ? (
            <>
              {product.map((item) => (
                <Product data={item} key={item.id} id={productid} />
              ))}
            </>
          ) : (
            <div>LOADING</div>
          )}
        </div>
        <div className='filter'>
          <FilterBrand product={product} />
          <FilterColor product={product} />
        </div>
      </div>
    </div>
  );
}
