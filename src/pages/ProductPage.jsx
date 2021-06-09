import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/actions/product";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  let dispatch = useDispatch();
  let { product, loading } = useSelector((state) => state.product);
  let { productid } = useParams();

  useEffect(() => {
    dispatch(fetchProduct(productid));
  }, []);

  return (
    <>
      {!loading ? (
        <>
          {product.map((item) => (
            <h3 key={item.id}>{item.name}</h3>
          ))}
        </>
      ) : (
        <div>LOADING</div>
      )}
    </>
  );
}
