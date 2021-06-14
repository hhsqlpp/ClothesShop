import { Link } from "react-router-dom";
import cart from "../assets/cart.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../store/actions/categories";

export default function Header() {
  let { categories, loading } = useSelector((state) => state.categories);
  let dispatch = useDispatch();

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
            Log in
          </Link>
          <Link to='/cart' className='cart'>
            <img src={cart} alt='cart' />
          </Link>
        </div>
      </div>
    </header>
  );
}
