import { useState } from "react";

export default function FilterBrand() {
  let [brandsFilter, setBrandsFilter] = useState({ select: "" });

  const handleChange = (e) => {
    setBrandsFilter({
      ...brandsFilter,
      select: e.target.name,
    });
  };

  return (
    <form className='filter-brand'>
      <h4>Бренд:</h4>
      <div>
        <input
          type='checkbox'
          id='All'
          name='All'
          value={brandsFilter.all}
          onChange={handleChange}
        />
        <label htmlFor='All'>Все</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='Nike'
          name='Nike'
          value={brandsFilter.nike}
          onChange={handleChange}
        />
        <label htmlFor='Nike'>Nike</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='Adidas'
          name='Adidas'
          value={brandsFilter.adidas}
          onChange={handleChange}
        />
        <label htmlFor='Adidas'>Adidas</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='Puma'
          name='Puma'
          value={brandsFilter.puma}
          onChange={handleChange}
        />
        <label htmlFor='Puma'>Puma</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='Reebok'
          name='Reebok'
          value={brandsFilter.reebok}
          onChange={handleChange}
        />
        <label htmlFor='Reebok'>Reebok</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='Air Jordan'
          name='Air Jordan'
          value={brandsFilter.airJordan}
          onChange={handleChange}
        />
        <label htmlFor='Air Jordan'>Air Jordan</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='VANS'
          name='VANS'
          value={brandsFilter.vans}
          onChange={handleChange}
        />
        <label htmlFor='VANS'>VANS</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='OFF-WHITE'
          name='OFF-WHITE'
          value={brandsFilter.vans}
          onChange={handleChange}
        />
        <label htmlFor='OFF-WHITE'>OFF-WHITE</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='Balenciaga'
          name='Balenciaga'
          value={brandsFilter.offWhite}
          onChange={handleChange}
        />
        <label htmlFor='Balenciaga'>Balenciaga</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='The North Face'
          name='The North Face'
          value={brandsFilter.theNorthFace}
          onChange={handleChange}
        />
        <label htmlFor='The North Face'>The North Face</label>
      </div>
    </form>
  );
}
