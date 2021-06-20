import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import fetchOrderInfo from "../store/actions/orderInfo";

export default function OrderInfo() {
  let { order } = useSelector((state) => state.orderInfo);
  let dispatch = useDispatch();
  let { orderid } = useParams();

  useEffect(() => {
    dispatch(fetchOrderInfo(orderid));
  }, []);

  return (
    <div className='order-info'>
      <div className='container'>
        <h1 className='order-info__title'>Информация о заказе</h1>
        <div className='order-info-block'>
          <h2>
            Имя: <span>{order.name}</span>
          </h2>
          <p>
            Номер телефона: <span>{order.phone}</span>
          </p>
          <p>
            Адрес: <span>{order.address}</span>
          </p>
          <p>
            Итоговая цена: <span>{order.totalPrice} сом</span>
          </p>
        </div>
        <div className='order-info__items'>
          {order.orders ? (
            order.orders.map((item) => {
              return (
                <div className='order-info__item' key={item.id}>
                  <div className='order-info__item-desc'>
                    <h3>{item.name}</h3>
                    <p>
                      Цена: <span>{item.price}</span>
                    </p>
                    <p>
                      Бренд: <span>{item.brand}</span>
                    </p>
                    <p>
                      Количество: <span>{item.count}</span>
                    </p>
                    <p>
                      Размер: <span>{item.size}</span>
                    </p>
                  </div>
                  <img src={item.image} alt={item.name} />
                </div>
              );
            })
          ) : (
            <div>LOADING</div>
          )}
        </div>
      </div>
    </div>
  );
}
