import React from 'react';
import './Items.css';

function Items({ category, subCategory, brand, goods, cashback, onChange, checked }) {
  return (
    <ul className="Items">
      <li>
        <input type="checkbox" checked={checked} onChange={onChange} />
      </li>
      <li>{category}</li>
      <li>{subCategory}</li>
      <li>{brand}</li>
      <li className="items__goods">{goods}</li>
      <li>{cashback}</li>
    </ul>
  );
}

export default Items;
