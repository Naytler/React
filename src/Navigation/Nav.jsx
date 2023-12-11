import React, { useState } from 'react';
import LinkNav from '../components/UIKit/LinkNav';
import Vector1 from '../images/imagesNav/Vector1';
import Vector2 from '../images/imagesNav/Vector2';
import Vector3 from '../images/imagesNav/Vector3';
import Vector4 from '../images/imagesNav/Vector4';
import Vector5 from '../images/imagesNav/Vector5';
import Vector6 from '../images/imagesNav/Vector6';
import Vector7 from '../images/imagesNav/Vector7';
import Vector8 from '../images/imagesNav/Vector8';
import Vector9 from '../images/imagesNav/Vector9';
import Vector10 from '../images/imagesNav/Vector10';
import './Nav.css';

function Nav() {
  return (
    <div className="navButton">
      <LinkNav text="Продукты" image={<Vector1 />} to="/products" />
      <LinkNav text="Пользователи" image={<Vector2 />} to="/clients" />
      <LinkNav text="Категории" image={<Vector3 />} to="/categories" />
      <LinkNav text="Города" image={<Vector4 />} to="/cities" />
      <LinkNav text="Бренды" image={<Vector5 />} to="/brands" />
      <LinkNav text="Протоколы" image={<Vector6 />} to="/protocols" />
      <LinkNav text="Заказы" image={<Vector7 />} to="/orders" />
      <LinkNav text="Баннеры" image={<Vector8 />} to="/banners" />
      <LinkNav text="Семинары" image={<Vector9 />} to="/seminars" />
      <LinkNav text="Промокоды" image={<Vector10 />} to="/promocode" />
    </div>
  );
}

export default Nav;
