import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import getMeAction from "../store/actions/auth";

export default function History() {
  const { shopping } = useSelector((state) => state.history);
  const { logined } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = localStorage.getItem("x-token");
  console.log(token)

  useEffect(() => {
    dispatch(getMeAction(token))
  })

  return (
    <>
      {logined ? (
        <div className='history'>
          <div className='container'>
            <h1 className='history-title'>История Заказов</h1>
            {shopping.map((item) => {
              return (
                <div className='history-item'>
                  <p className='history-item__time'>{item.date}</p>
                  <div>
                    {item.products.map((product) => {
                      return <p>{product.name}</p>;
                    })}
                  </div>
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
