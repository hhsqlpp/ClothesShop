export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container info'>
        <div className='info_item'>
          <div className='title'>Информация</div>
          <ul className='item_menu'>
            <li>Политика конфиденциальности</li>
            <li>Доставка и оплата</li>
            <li>Обмен и возврат</li>
            <li>Таблица размеров</li>
            <li>Вопрос-Ответ</li>
            <li>Поиск</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div className='info_item'>
          <div className='title'>Контакты</div>
          <p>
            Телефон:
            <a className='color-blue' href='tel:+78007070254'>
              +996 (772)-989-188 (звонок по КР бесплатный)
            </a>
          </p>
          <p>
            WhatsApp/Tlgrm:
            <a className='color-blue' href='tel:+79631323104'>
              +996 (772)-989-188
            </a>
          </p>
          <p>Copyright © 2020 SHOP Sneakers</p>
        </div>
        <div className='info_item'>
          <div className='title'>Социальные Сети</div>
          <p className='soc_links'>Instagram</p>
          <p className='soc_links'>Telegram</p>
          <p className='soc_links'>Youtube</p>
          <p className='soc_links'>Twitter</p>
        </div>
      </div>
    </footer>
  );
}
