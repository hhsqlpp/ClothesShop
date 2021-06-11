import { useEffect, useState } from "react";
import Brand from "./Brand";

export default function Brands() {
  let [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1717/brands")
      .then((data) => data.json())
      .then((data) => setBrands(data));
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
