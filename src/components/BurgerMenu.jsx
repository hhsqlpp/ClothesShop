import { useSelector } from "react-redux";

export default function BurgerMenu() {
    let { categories } = useSelector((state) => state.categories);

    return (
        <>
            <div className="burger">
                <span></span>
            </div>
            {/* <nav className='navigation'>
                {categories.map((category) => (
                    <Link to={`/category/${category.href}`} key={category.name}>
                        {category.name}
                    </Link>
                ))}
            </nav> */}
        </>
        
    )
}