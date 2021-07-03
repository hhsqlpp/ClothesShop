import Category from "../components/Category";
import { useSelector } from "react-redux";
import ErrorBlock from "../components/ErrorBlock";
import Spinner from "../components/Spinner";

export default function CategoryPage() {
  let { categories, loading, error } = useSelector((state) => state.categories);

  return (
    <div className='category'>
      <div className='container'>
        <h2 className='category-name'>Категории:</h2>
        <div className='category-items'>
          {
            !error ? (
              loading ? (
                <Spinner />
              ) : (
                <>
                  {categories.map((item) => (
                    <Category category={item} key={item.href} />
                  ))}
                </>
              )
            ) : (
              <ErrorBlock />
            )
          }
        </div>
      </div>
    </div>
  );
}
