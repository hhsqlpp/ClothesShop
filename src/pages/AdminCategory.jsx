import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import AdminCategoryItem from "../components/AdminCategoryItem";
import {
  fetchAddProduct,
  fetchChangeProduct,
  fetchProduct,
} from "../store/actions/product";
import Spinner from "../components/Spinner";
import ErrorBlock from "../components/ErrorBlock";

export default function AdminCategory() {
  let { products, loading, error } = useSelector((state) => state.product);
  let dispatch = useDispatch();

  let [changeForm, setChangeForm] = useState({});
  let [addForm, setAddForm] = useState({});

  let [changeModal, setChangeModal] = useState(false);
  let [addModal, setAddModal] = useState(false);

  let [id, setId] = useState("");

  let { category } = useParams();

  const handleChangeModal = (e) => {
    setChangeForm({
      ...changeForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddModal = (e) => {
    setAddForm({
      ...addForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeProduct = (e) => {
    e.preventDefault();

    const body = {
      name: changeForm.name,
      img: changeForm.image,
      color: changeForm.color,
      brand: changeForm.brand,
      price: changeForm.price,
    };

    dispatch(fetchChangeProduct(category, id, body));
    setChangeModal(false);
  };
  const handleAddProduct = (e) => {
    e.preventDefault();

    const body = {
      name: addForm.name,
      img: addForm.image,
      color: addForm.color,
      brand: addForm.brand,
      price: addForm.price,
    };

    dispatch(fetchAddProduct(category, body));
    alert("Добавлен новый товар!");
    toggleAddModal();
  };

  const toggleChangeModal = () => {
    setChangeModal(!changeModal);
  };
  const toggleAddModal = () => {
    setAddModal(!addModal);
  };

  useEffect(() => {
    dispatch(fetchProduct(category));
  }, []);

  return (
    <div className='change'>
      <div className='container'>
        <div className='add-product'>
          <button type='button' onClick={toggleAddModal}>
            Добавить
          </button>
        </div>
        {!error ? (
          loading ? (
            <Spinner />
          ) : (
            products.map((item) => {
              return (
                <AdminCategoryItem
                  data={item}
                  key={item.id}
                  toggleChangeModal={toggleChangeModal}
                  setId={setId}
                />
              );
            })
          )
        ) : (
          <ErrorBlock />
        )
        }
        <div className={`modal ${!changeModal ? "none" : null}`}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <h2>Изменить товар</h2>
              <form onSubmit={handleChangeProduct}>
                <label htmlFor='name'>Название:</label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  onChange={handleChangeModal}
                  value={changeForm.name}
                />
                <label htmlFor='price'>Цена:</label>
                <input
                  type='text'
                  name='price'
                  id='price'
                  onChange={handleChangeModal}
                  value={changeForm.price}
                />
                <label htmlFor='price'>Изображение:</label>
                <input
                  type='text'
                  name='image'
                  id='image'
                  onChange={handleChangeModal}
                  value={changeForm.image}
                />
                <label htmlFor='price'>Бренд:</label>
                <input
                  type='text'
                  name='brand'
                  id='brand'
                  onChange={handleChangeModal}
                  value={changeForm.brand}
                />
                <label htmlFor='price'>Цвет:</label>
                <input
                  type='text'
                  name='color'
                  id='color'
                  onChange={handleChangeModal}
                  value={changeForm.color}
                />
                <button type='submit'>Изменить</button>
              </form>
            </div>
          </div>
        </div>
        <div className={`modal ${!addModal ? "none" : null}`}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <h2>Добавить</h2>
              <form onSubmit={handleAddProduct}>
                <label htmlFor='name'>Название:</label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  onChange={handleAddModal}
                  value={addForm.name}
                />
                <label htmlFor='price'>Цена:</label>
                <input
                  type='text'
                  name='price'
                  id='price'
                  onChange={handleAddModal}
                  value={addForm.price}
                />
                <label htmlFor='price'>Изображение:</label>
                <input
                  type='text'
                  name='image'
                  id='image'
                  onChange={handleAddModal}
                  value={addForm.image}
                />
                <label htmlFor='price'>Бренд:</label>
                <input
                  type='text'
                  name='brand'
                  id='brand'
                  onChange={handleAddModal}
                  value={addForm.brand}
                />
                <label htmlFor='price'>Цвет:</label>
                <input
                  type='text'
                  name='color'
                  id='color'
                  onChange={handleAddModal}
                  value={addForm.color}
                />
                <button type='submit'>Изменить</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
