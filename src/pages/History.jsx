import { useSelector } from "react-redux";

export default function History() {
  const { shopping } = useSelector((state) => state.history);

  return (
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
  );
}
