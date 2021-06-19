import { useState } from "react";

export default function FilterColor() {
  let [colorsFilter, setColorsFilter] = useState({});

  const handleChange = (e) => {
    setColorsFilter({
      ...colorsFilter,
      [e.target.name]: e.target.id
    })
  }

  return (
    <form className='filter-color'>
      <h4>Цвет:</h4>
      <div>
        <input name="all" value={colorsFilter.all} onChange={handleChange} type='checkbox' id='all' />
        <label htmlFor='all'>Все</label>
      </div>
      <div>
        <input name="white" value={colorsFilter.white} onChange={handleChange} type='checkbox' id='Белый' />
        <label htmlFor='Белый'>Белый</label>
      </div>
      <div>
        <input name="black" value={colorsFilter.black} onChange={handleChange} type='checkbox' id='Черный' />
        <label htmlFor='Черный'>Черный</label>
      </div>
      <div>
        <input name="blue" value={colorsFilter.blue} onChange={handleChange} type='checkbox' id='Синий' />
        <label htmlFor='Синий'>Синий</label>
      </div>
      <div>
        <input name="red" value={colorsFilter.red} onChange={handleChange} type='checkbox' id='Красный' />
        <label htmlFor='Красный'>Красный</label>
      </div>
      <div>
        <input name="grey" value={colorsFilter.grey} onChange={handleChange} type='checkbox' id='Серый' />
        <label htmlFor='Серый'>Серый</label>
      </div>
      <div>
        <input name="brown" value={colorsFilter.brown} onChange={handleChange} type='checkbox' id='Коричневый' />
        <label htmlFor='Коричневый'>Коричневый</label>
      </div>
      <div>
        <input name="yellow" value={colorsFilter.yellow} onChange={handleChange} type='checkbox' id='Желтый' />
        <label htmlFor='Желтый'>Желтый</label>
      </div>
      <div>
        <input name="green" value={colorsFilter.green} onChange={handleChange} type='checkbox' id='Зеленый' />
        <label htmlFor='Зеленый'>Зеленый</label>
      </div>
    </form>
  );
}
