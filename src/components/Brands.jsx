import { useEffect } from "react";
import Brand from "./Brand";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands } from "../store/actions/brands";

export default function Brands() {
  let dispatch = useDispatch();
  let { brands, loading } = useSelector((state) => state.brands);

  useEffect(() => {
    dispatch(fetchBrands());
  }, []);

  return (
    <div className='brand'>
      <div className='container'>
        {brands.map((brand) => (
          <Brand brand={brand} key={brand.name} />
        ))}
      </div>
    </div>
  );
}
