import React, { useState } from 'react';

import LinkNav from '../UIKit/Button/LinkNav';
import vector from '../../images/imagesButton/vectors';
import './Nav.css';

function Nav() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  return (
    <>
      <div className="navButton">
        <LinkNav text="Продукты" image={vector.vector1} to="/products" />
        <LinkNav text="Пользователи" image={vector.vector2} to="/clients" />
        <LinkNav text="Категории" image={vector.vector3} to="/categories" />
        <LinkNav text="Города" image={vector.vector4} to="/cities" />
        <LinkNav text="Бренды" image={vector.vector5} to="/brands" />
        <LinkNav text="Протоколы" image={vector.vector6} to="/protocols" />
        <LinkNav text="Заказы" image={vector.vector7} to="/orders" />
        <LinkNav text="Баннеры" image={vector.vector8} to="/banners" />
        <LinkNav text="Семинары" image={vector.vector9} to="/seminars" />
        <LinkNav text="Промокоды" image={vector.vector10} to="/promocode" />
      </div>
    </>
  );
}

export default Nav;
