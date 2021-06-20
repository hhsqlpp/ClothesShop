import { Link } from "react-router-dom";

export default function Order({ data }) {
  return (
    <Link to={`/admin/orders/${data.id}`} className='order-item'>
      <h2>{data.name}</h2>
      <p>{data.totalPrice} сом</p>
    </Link>
  );
}
