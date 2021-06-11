import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductInfo() {
  const { product, productid } = useParams();
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    fetch("http://localhost:1717/category/" + productid + "/" + product)
      .then((data) => data.json())
      .then((data) => setProductInfo(data));
  }, []);

  let category = "";
  let sizes = [
    "XS",
    "S",
    "M",
    "L",
    "Xl",
    "XXl",
    "XXXl",
    "BXl",
    "BXXL",
    "BXXXL",
  ];

  switch (productid) {
    case "shoes":
      category = "обуви";
      sizes = ["39", "40", "41", "42", "43", "44", "45"];
      break;
    case "Tshirts":
      category = "футболки";
      break;
    case "hoodies":
      category = "худи";
      break;
    case "trousers":
      category = "штанов";
      break;
    case "jackets":
      category = "куртки";
      break;
    default:
      break;
  }

  return (
    <div className='product-info'>
      <div className='container'>
        <img
          className='product-info-photo'
          src={productInfo.img}
          alt={productInfo.name}
        />
        <div className='product-info__block'>
          <h2 className='product-info__block-name'>{productInfo.name}</h2>
          <p className='product-info__block-price'>{productInfo.price} сом</p>
          <p className='product-info__block-brand'>
            Бренд: <span>{productInfo.brand}</span>
          </p>
          <p className='product-info__block-color'>
            Цвет: <span>{productInfo.color}</span>
          </p>
          <ul className='product-info__block-desc'></ul>
          <div className='product-info__block-how'>
            <h3>Как сделать заказ:</h3>
            <ul>
              <li>Добавляете товар в корзину и оформляете заказ;</li>
              <li>
                С вами связывается наш менеджер и сообщает о наличии размера на
                складе.
              </li>
            </ul>
          </div>
          <div className='product-info__block-size'>
            <label htmlFor='size'>Размер {category}:</label>
            <select>
              {sizes.map((size) => {
                return (
                  <option value={size} key={size}>
                    {size}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='product-info__block-count'>
            <label htmlFor='count'>Количество:</label>
            <input name='count' type='number' value='1' />
          </div>
          <button type='button'>Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
}
