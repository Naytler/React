import React from 'react';
import styles from './ItemTop.module.scss';

function ItemTop({ headerCheckboxChange }) {
  return (
    <div className={styles.ItemTop}>
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
