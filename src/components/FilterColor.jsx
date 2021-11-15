export default function FilterColor({ colorsFilter, handleChangeColor }) {
  return (
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
  );
}
