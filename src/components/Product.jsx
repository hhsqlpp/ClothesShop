import { Link } from "react-router-dom";

export default function Product({ data, id }) {
  return (
    <div className='product__item'>
      <div className='product__photo'>
        <Link to={`/category/${id}/${data.id}`}>
          <img className='product__item-img' src={data.img} alt={data.name} />
        </Link>
      </div>
      <h3 className='product__item-name'>{data.name}</h3>
      <div className='product__item-price'>
        <span>{data.price} сом</span>
      </div>
    </div>
  );
}
