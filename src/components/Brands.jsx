import { useEffect } from "react";
import Brand from "./Brand";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands } from "../store/actions/brands";
import ErrorBlock from "../components/ErrorBlock";
import Spinner from "../components/Spinner";

export default function Brands() {
  let dispatch = useDispatch();
  let { brands, loading, error } = useSelector((state) => state.brands);

  useEffect(() => {
    dispatch(fetchBrands());
  }, []);

  return (
    <div className='brand'>
      <div className='container'>
        {
          !error ? (
            !loading ? (
              brands.map((brand) => (
                <Brand brand={brand} key={brand.name} />
              ))
            ) : (
              <Spinner />
            )
          ) : (
            <ErrorBlock />
          )
        }
      </div>
    </div>
  );
}
