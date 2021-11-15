export default function FilterBrand({ brandsFilter, handleChangeBrand }) {
  return (
    <form className='filter-brand'>
      <h4>Бренд:</h4>
      <div>
        <input
          type='checkbox'
          id='all'
          name='all'
          value={brandsFilter.all}
          onChange={handleChangeBrand}
          checked={brandsFilter.all ? true : false}
        />
        <label htmlFor='all'>Все</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='Nike'
          name='Nike'
          value={brandsFilter.nike}
          onChange={handleChangeBrand}
        />
        <label htmlFor='Nike'>Nike</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='Adidas'
          name='Adidas'
          value={brandsFilter.adidas}
          onChange={handleChangeBrand}
        />
        <label htmlFor='Adidas'>Adidas</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='Puma'
          name='Puma'
          value={brandsFilter.puma}
          onChange={handleChangeBrand}
        />
        <label htmlFor='Puma'>Puma</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='Reebok'
          name='Reebok'
          value={brandsFilter.reebok}
          onChange={handleChangeBrand}
        />
        <label htmlFor='Reebok'>Reebok</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='Air Jordan'
          name='Air Jordan'
          value={brandsFilter.airJordan}
          onChange={handleChangeBrand}
        />
        <label htmlFor='Air Jordan'>Air Jordan</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='VANS'
          name='VANS'
          value={brandsFilter.vans}
          onChange={handleChangeBrand}
        />
        <label htmlFor='VANS'>VANS</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='OFF-WHITE'
          name='OFF-White'
          value={brandsFilter.vans}
          onChange={handleChangeBrand}
        />
        <label htmlFor='OFF-WHITE'>OFF-WHITE</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='Balenciaga'
          name='Balenciaga'
          value={brandsFilter.offWhite}
          onChange={handleChangeBrand}
        />
        <label htmlFor='Balenciaga'>Balenciaga</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='The North Face'
          name='The North Face'
          value={brandsFilter.theNorthFace}
          onChange={handleChangeBrand}
        />
        <label htmlFor='The North Face'>The North Face</label>
      </div>
    </form>
  );
}
