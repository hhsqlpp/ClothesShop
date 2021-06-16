import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { deleteFromCart } from "../store/actions/cart";
import { getMeAction } from "../store/actions/auth";
import { Link } from "react-router-dom";

export default function CartPage() {
  let dispatch = useDispatch();
  let { cart } = useSelector((state) => state.cart);
  let { logined } = useSelector((state) => state.auth);

  let [modal, setModal] = useState(false);
  let [totalPrice, setTotalPrice] = useState(0);

  const handleOpenModal = () => {
    setModal(!modal)
  }

  const handleRemove = (id) => {
    dispatch(deleteFromCart(id))
    alert("Товар был удален из корзины");
  }

  useEffect(() => {
    if (cart.length !== 0) {
      let totalPrice = 0;

      cart.forEach((item) => {
        totalPrice += Number(item.price * item.count)

        setTotalPrice(totalPrice)
      });
    } else {
      setTotalPrice(0)
    }
  }, [cart]);

  useEffect(() => {
    let token = localStorage.getItem("x-token");
    dispatch(getMeAction(token));
  }, []);

  return (
    <div className='cart'>
      <div className='container'>
        {
          logined ? (
            <>
              {cart.length === 0 ? (
                <div className="cart-empty">Корзина пуста</div>
          ) : (
            <>
              <div className='cart-block'>
                {cart.map((item) => (
                  <CartItem data={item} key={item.id} handleRemove={handleRemove} />
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
                <button id='buy' type='button' onClick={handleOpenModal}>
                  Купить
                </button>
              </div>
            </div>
            <div className={`modal ${!modal ? "none" : null}`}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <h3>Оформить заказ</h3>
                  <form>
                    <label htmlFor="name">Имя:</label>
                    <input type="text" name="name" placeholder="Иванов Александр" />
                    <label htmlFor="phone">Номер телефона:</label>
                    <input type="text" name="phone" placeholder="0 123 456 789" />
                    <label htmlFor="addres">Адрес:</label>
                    <input type="text" name="addres" placeholder="Тверская улица, дом 13" />
                    <button type="submit">Купить</button>
                  </form>
                </div>
              </div>       
            </div>
            </>
          ) : (
            <div className="not-auth">
                Вы не авторизованы<br /><br />
                <Link to="/register">Зарегистрироваться</Link>
            </div>       
          )
        }   
      </div>
    </div>
  );
}
