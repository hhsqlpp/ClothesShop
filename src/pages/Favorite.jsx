import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Favorite() {
  const { favoriteProducts } = useSelector((state) => state.favorite);
  const { logined } = useSelector((state) => state.auth);

  return (
    <>
      {logined ? (
        <div className='favorite'>
          <div className='container'>
            <h1 className='favorite-title'>Избранные товары</h1>
            {favoriteProducts.map((item) => {
              return (
                <div className='favorite-item'>
                  <div className='favorite-item-info'>
                    <h2 className='favorite-item__title'>{item.name}</h2>
                    <p className='favorite-item__price'>
                      Цена: {item.price} сом
                    </p>
                    <p className='favorite-item__brand'>Бренд: {item.brand}</p>
                    <Link to={`/category/${item.category}/${item.id}`}>
                      Купить
                    </Link>
                  </div>
                  <img src={item.img} alt={item.name} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p style={{ textAlign: "center", fontSize: "25px" }}>
          Вы не авторизованы!
          <br />
          <Link to='/login'>Войти в аккаунт</Link>
        </p>
      )}
    </>
  );
}
