import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Order from "../components/Order";
import { fetchGetOrder } from "../store/actions/order";

export default function OrdersPage() {
  let dispatch = useDispatch();
  let { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchGetOrder());
  }, []);

  return (
    <div className='order'>
      <div className='container'>
        <h1 className='order-title'>Заказы</h1>
        {orders.map((order) => {
          return <Order data={order} key={order.id} />;
        })}
      </div>
    </div>
  );
}
