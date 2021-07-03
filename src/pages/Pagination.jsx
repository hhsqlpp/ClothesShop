export default function Pagination({
  productsPerPage,
  totalProducts,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination'>
      <ul className='pagination-list'>
        {pageNumbers.map((number) => (
          <li
            className='page-item'
            key={number}
            onClick={() => paginate(number)}
          >
            <span className='page-link'>{number}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
