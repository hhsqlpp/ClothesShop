import { Link } from "react-router-dom";

export default function Category({ category }) {
  return (
    <Link className='category-item' to={`/category/${category.href}`}>
      <img src={category.img} alt={category.name} />
      <h3 className='category-item__name'>{category.name}</h3>
    </Link>
  );
}
