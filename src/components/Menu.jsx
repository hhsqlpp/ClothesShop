import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Menu({ menuModal, openMenuModal }) {
  let { categories, loading } = useSelector((state) => state.categories);

  return (
    <div className={`menu-back ${menuModal ? "show" : null}`}>
      <div className='menu-content'>
        <nav className='menu-content__navigation'>
          {!loading ? (
            categories.map((category) => (
              <Link
                to={`/category/${category.href}`}
                key={category.name}
                onClick={openMenuModal}
              >
                {category.name}
              </Link>
            ))
          ) : (
            <div>Loading</div>
          )}
          <span className='close' onClick={openMenuModal}>
            X
          </span>
        </nav>
      </div>
    </div>
  );
}
