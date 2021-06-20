import deleteImg from "../assets/delete.svg";
import editImg from "../assets/edit.svg";
import { useDispatch } from "react-redux";
import { fetchDeleteProduct } from "../store/actions/product";
import { useParams } from "react-router-dom";

export default function AdminCategoryItem({ data, toggleChangeModal, setId }) {
  let dispatch = useDispatch();
  let { category } = useParams();

  const handleRemove = () => {
    dispatch(fetchDeleteProduct(category, data.id));
    alert("Товар был успешно удален!");
  };

  return (
    <>
      <div className='change-item'>
        <p>{data.name}</p>
        <p>price: {data.price}</p>
        <p>
          <img
            src={editImg}
            alt='edit'
            onClick={() => {
              toggleChangeModal();
              setId(data.id);
            }}
          />
        </p>
        <span className='delete'>
          <img src={deleteImg} alt='delete' onClick={handleRemove} />
        </span>
      </div>
    </>
  );
}
