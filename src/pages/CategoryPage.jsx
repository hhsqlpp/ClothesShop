import { useEffect } from "react";
import Category from "../components/Category";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../store/actions/categories";

export default function CategoryPage() {
  let dispatch = useDispatch();
  let { categories, loading } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories())
  }, []);

  return (
    <div className='category'>
      <div className='container'>
        <h2 className='category-name'>Категории:</h2>
        <div className='category-items'>
          {loading ? (
            <div>Загрузка</div>
          ) : (
            <>
              {categories.map((item) => (
                <Category category={item} key={item.href} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
