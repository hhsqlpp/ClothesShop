import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductinfo } from "../store/actions/productInfo";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/actions/cart";

export default function ProductInfo() {
  const { categoryName, productid } = useParams();
  let { productInfo } = useSelector((state) => state.productInfo);
  let dispatch = useDispatch();

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

  let [selectSize, setSelectSize] = useState(sizes[0]);
  let [countForm, setCountForm] = useState(1);

  let category = "";

  switch (categoryName) {
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

  useEffect(() => {
    dispatch(fetchProductinfo(categoryName, productid));
  }, []);

  const countChange = (e) => {
    setCountForm(e.target.value);
  };

  const changeSize = (e) => {
    setSelectSize(e.target.value);
  };

  const addToCart = () => {
    let body = {
      name: productInfo.name,
      price: productInfo.price,
      image: productInfo.img,
      count: countForm,
      size: selectSize,
      brand: productInfo.brand,
      id: productInfo.id,
    };
    dispatch(setCart(body));
    alert("Товар успешно добавлен в корзину!");
  };

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
            <select value={selectSize} onChange={changeSize}>
              {sizes.map((size) => {
                return <option key={size}>{size}</option>;
              })}
            </select>
          </div>
          <div className='product-info__block-count'>
            <label htmlFor='count'>Количество:</label>
            <input
              name='count'
              type='number'
              value={countForm}
              onChange={countChange}
            />
          </div>
          <button
            type='button'
            onClick={() => {
              addToCart();
            }}
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
}
