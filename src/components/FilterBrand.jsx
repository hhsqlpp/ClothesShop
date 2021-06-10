export default function FilterBrand() {
  return (
    <form className='filter-brand'>
      <h4>Бренд:</h4>
      <div>
        <input type='checkbox' id='Nike' />
        <label htmlFor='Nike'>Nike</label>
      </div>
      <div>
        <input type='checkbox' id='Adidas' />
        <label htmlFor='Adidas'>Adidas</label>
      </div>
      <div>
        <input type='checkbox' id='Puma' />
        <label htmlFor='Puma'>Puma</label>
      </div>
      <div>
        <input type='checkbox' id='Reebok' />
        <label htmlFor='Reebok'>Reebok</label>
      </div>
      <div>
        <input type='checkbox' id='Air Jordan' />
        <label htmlFor='Air Jordan'>Air Jordan</label>
      </div>
      <div>
        <input type='checkbox' id='VANS' />
        <label htmlFor='VANS'>VANS</label>
      </div>
      <div>
        <input type='checkbox' id='OFF-WHITE' />
        <label htmlFor='OFF-WHITE'>OFF-WHITE</label>
      </div>
      <div>
        <input type='checkbox' id='Balenciaga' />
        <label htmlFor='Balenciaga'>Balenciaga</label>
      </div>
      <div>
        <input type='checkbox' id='The North Face' />
        <label htmlFor='The North Face'>The North Face</label>
      </div>
    </form>
  );
}
