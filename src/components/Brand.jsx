export default function Brand({ brand }) {
  return (
    <div className='brand__item'>
      <img src={brand.img} alt={brand.name} />
    </div>
  );
}
