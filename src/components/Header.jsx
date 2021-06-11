import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  let [href, setHref] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1717/categories")
      .then((data) => data.json())
      .then((data) => setHref(data));
  }, []);

  return (
    <header className='header'>
      <div className='container'>
        <Link to='/'>Logo</Link>
        <nav className='navigation'>
          {href.map((item) => (
            <Link to={`/category/${item.href}`}>{item.name}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
