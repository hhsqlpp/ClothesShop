import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import ErrorBlock from "../components/ErrorBlock";

export default function AdminPage() {
  let { categories, loading, error } = useSelector((state) => state.categories);

  return (
    <div className='admin-page'>
      <div className='container'>
        <h1 className='admin-page__title'>Страница супер пользователя</h1>
        <Link to='admin/orders'>Перейти к странице просмотра заказов</Link>
        <div className='category-items'>
          {!error ? (
            loading ? (
              <Spinner />
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
            )
          ) : (
            <ErrorBlock />
          )}
        </div>
      </div>
    </div>
  );
}
