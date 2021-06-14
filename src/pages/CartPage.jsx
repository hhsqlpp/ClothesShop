import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function CartPage() {
  let { cart } = useSelector((state) => state.cart);
  let [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    try {
      let a = cart.reduce((prev, curr, i, arr) => {
        console.log(arr);
        console.log(curr.price);
        let total =
          Number(prev.price * prev.count) + Number(curr.price * curr.count);

        setTotalPrice(total);
      });
    } catch {
      return null;
    }
  }, []);

  return (
    <div className='cart'>
      <div className='container'>
        {cart === [] ? (
          <div>Корзина пуста</div>
        ) : (
          <>
            <div className='cart-block'>
              {cart.map((item) => (
                <CartItem data={item} key={item.id} />
              ))}
            </div>
          </>
        )}
        <div className='result'>
          <div className='total-price'>
            <span>Итого:</span>
            <span>{totalPrice} сом</span>
          </div>
          <div className='buy-block'>
            <button id='buy' type='button'>
              Купить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
