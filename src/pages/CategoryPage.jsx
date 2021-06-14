import Category from "../components/Category";
import { useSelector } from "react-redux";

export default function CategoryPage() {
  let { categories, loading } = useSelector((state) => state.categories);

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
