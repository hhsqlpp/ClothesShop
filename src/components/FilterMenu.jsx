import { useState } from "react";

export default function FilterMenu({
  brandsFilter,
  colorsFilter,
  handleChangeColor,
  handleChangeBrand,
}) {
  let [filterModal, setFilterModal] = useState(false);

  const toggleFilterModal = () => {
    setFilterModal(!filterModal);
  };

  return (
    <div className='filter-menu'>
      <button type='button' onClick={toggleFilterModal}>
        Показать фильтры
      </button>
      <div className={`filter-menu-block ${!filterModal ? "hide" : null}`}>
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
        <form className='filter-color'>
          <h4>Цвет:</h4>
          <div>
            <input
              name='allColors'
              value={colorsFilter.allColors}
              onChange={handleChangeColor}
              type='checkbox'
              id='allColors'
              checked={colorsFilter.allColors ? "checked" : false}
            />
            <label htmlFor='allColors'>Все</label>
          </div>
          <div>
            <input
              name='white'
              value={colorsFilter.white}
              onChange={handleChangeColor}
              type='checkbox'
              id='Белый'
            />
            <label htmlFor='Белый'>Белый</label>
          </div>
          <div>
            <input
              name='black'
              value={colorsFilter.black}
              onChange={handleChangeColor}
              type='checkbox'
              id='Черный'
            />
            <label htmlFor='Черный'>Черный</label>
          </div>
          <div>
            <input
              name='blue'
              value={colorsFilter.blue}
              onChange={handleChangeColor}
              type='checkbox'
              id='Синий'
            />
            <label htmlFor='Синий'>Синий</label>
          </div>
          <div>
            <input
              name='red'
              value={colorsFilter.red}
              onChange={handleChangeColor}
              type='checkbox'
              id='Красный'
            />
            <label htmlFor='Красный'>Красный</label>
          </div>
          <div>
            <input
              name='grey'
              value={colorsFilter.grey}
              onChange={handleChangeColor}
              type='checkbox'
              id='Серый'
            />
            <label htmlFor='Серый'>Серый</label>
          </div>
          <div>
            <input
              name='brown'
              value={colorsFilter.brown}
              onChange={handleChangeColor}
              type='checkbox'
              id='Коричневый'
            />
            <label htmlFor='Коричневый'>Коричневый</label>
          </div>
          <div>
            <input
              name='yellow'
              value={colorsFilter.yellow}
              onChange={handleChangeColor}
              type='checkbox'
              id='Желтый'
            />
            <label htmlFor='Желтый'>Желтый</label>
          </div>
          <div>
            <input
              name='green'
              value={colorsFilter.green}
              onChange={handleChangeColor}
              type='checkbox'
              id='Зеленый'
            />
            <label htmlFor='Зеленый'>Зеленый</label>
          </div>
        </form>
      </div>
    </div>
  );
}
