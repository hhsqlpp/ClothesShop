import { useEffect, useState } from "react";
import Category from "../components/Category";

export default function CategoryPage() {
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1717/categories")
      .then((data) => data.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className='category'>
      <div className='container'>
        <h2 className='category-name'>Категория</h2>
        <div className='category-items'>
          {categories === [] ? (
            <div>Загрузка</div>
          ) : (
            <>
              {categories.map((item) => (
                <Category category={item} key={item.name} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
