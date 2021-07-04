import { Link } from "react-router-dom";
import cart from "../assets/cart.png";
import user from "../assets/user.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategories } from "../store/actions/categories";
import BurgerMenu from "../components/BurgerMenu";
import Menu from "./Menu";

export default function Header() {
  let { categories, loading } = useSelector((state) => state.categories);
  let dispatch = useDispatch();

  let [userModal, setUserModal] = useState(false);
  let [menuModal, setMenuModal] = useState(false);

  const openMenuModal = () => {
    setMenuModal(!menuModal);
  };

  const openUserModal = () => {
    setUserModal(!userModal);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <header className='header'>
      <div className='container'>
        <Link to='/'>Logo</Link>
        <nav className='navigation'>
          {!loading ? (
            categories.map((category) => (
              <Link to={`/category/${category.href}`} key={category.name}>
                {category.name}
              </Link>
            ))
          ) : (
            <div>Loading</div>
          )}
        </nav>
        <div className='header__right'>
          <Link to='/login' className='login'>
            Войти
          </Link>
          <span className='user' onClick={openUserModal}>
            <img src={user} alt='user' />
            <div className={`user-info ${!userModal ? "hide" : "active"}`}>
              <Link to='/user/favorite'>Избранные товары</Link>
              <Link to='/user/history'>История покупок</Link>
            </div>
          </span>
          <Link to='/cart' className='cart'>
            <img src={cart} alt='cart' />
          </Link>
        </div>
        <BurgerMenu openMenuModal={openMenuModal} />
        <Menu menuModal={menuModal} openMenuModal={openMenuModal} />
      </div>
    </header>
  );
}
