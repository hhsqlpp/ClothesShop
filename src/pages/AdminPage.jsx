import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AdminPage() {
  let { categories, loading } = useSelector((state) => state.categories);

  return (
    <div className='admin-page'>
      <div className='container'>
        <h1 className='admin-page__title'>Страница супер пользователя</h1>
        <Link to='admin/orders'>Перейти к просмотру заказов</Link>
        <div className='category-items'>
          {loading ? (
            <div>Загрузка</div>
          ) : (
            <>
              {categories.map((item) => (
                <Link
                  className='category-item'
                  to={`/admin/${item.href}`}
                  key={item.name}
                >
                  <img src={item.img} alt={item.name} />
                  <h3 className='category-item__name'>{item.name}</h3>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
