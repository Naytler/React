import React from 'react';
import './ItemTop.css';

function ItemTop({ headerCheckboxChange }) {
  return (
    <div className="ItemTop">
      <ul>
        <li>
          <input type="checkbox" onChange={headerCheckboxChange} />
        </li>
        <li>Категория</li>
        <li>Подкатегория</li>
        <li>Бренд</li>
        <li>Товары</li>
        <li>Кешбек</li>
      </ul>
    </div>
  );
}

export default ItemTop;
