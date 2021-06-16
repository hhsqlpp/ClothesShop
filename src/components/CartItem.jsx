export default function CartItem({ data, handleRemove }) {
  return (
    <div className='cart-block__item'>
      <div className='cart-block__item-desc'>
        <h3 className='cart-block__item-desc__name'>{data.name}</h3>
        <p className='cart-block__item-desc__size'>
          <span>Размер:</span> {data.size}
        </p>
        <p className='cart-block__item-desc__price'>
          <span>Цена:</span>
          {data.price} сом
        </p>
        <p className='cart-block__item-desc__quantiity'>
          <span>Количество:</span>
          {data.count}
        </p>
        <button id='removeFromCart' onClick={() => handleRemove(data.id)}>Удалить из корзины</button>
      </div>
      <img src={data.image} alt={data.name} />
    </div>
  );
}
