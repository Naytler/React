import React from 'react';
import styles from './ClientItemTop.module.scss';

function ClientItemTop() {
  return (
    <div className={styles.ClientItemTop}>
      <ul>
        <li>ФИ</li>
        <li>Почта</li>
        <li>Телефон</li>
      </ul>
    </div>
  );
}

export default ClientItemTop;
