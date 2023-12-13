import React from 'react';
import styles from './Items.module.scss';

function Items({ category, subCategory, brand, goods, cashback, onChange, checked }) {
  return (
    <ul className={styles.Items}>
      <li>
        <input type="checkbox" checked={checked} onChange={onChange} />
      </li>
      <li>{category}</li>
      <li>{subCategory}</li>
      <li>{brand}</li>
      <li className={styles.items__goods}>{goods}</li>
      <li>{cashback}</li>
    </ul>
  );
}

export default Items;
