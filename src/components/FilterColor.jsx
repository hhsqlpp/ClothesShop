export default function FilterColor() {
  return (
    <form className='filter-color'>
      <h4>Цвет:</h4>
      <div>
        <input type='checkbox' id='All' checked />
        <label htmlFor='All'>Все</label>
      </div>
      <div>
        <input type='checkbox' id='Белый' />
        <label htmlFor='Белый'>Белый</label>
      </div>
      <div>
        <input type='checkbox' id='Черный' />
        <label htmlFor='Черный'>Черный</label>
      </div>
      <div>
        <input type='checkbox' id='Синий' />
        <label htmlFor='Синий'>Синий</label>
      </div>
      <div>
        <input type='checkbox' id='Красный' />
        <label htmlFor='Красный'>Красный</label>
      </div>
      <div>
        <input type='checkbox' id='Серый' />
        <label htmlFor='Серый'>Серый</label>
      </div>
      <div>
        <input type='checkbox' id='Коричневый' />
        <label htmlFor='Коричневый'>Коричневый</label>
      </div>
      <div>
        <input type='checkbox' id='Желтый' />
        <label htmlFor='Желтый'>Желтый</label>
      </div>
      <div>
        <input type='checkbox' id='Зеленый' />
        <label htmlFor='Зеленый'>Зеленый</label>
      </div>
    </form>
  );
}
