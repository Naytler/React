import React from 'react';
import styles from './ClietItems.module.scss';

function ClietItems({ name, email, phone }) {
  return (
    <ul className={styles.client__items__goods}>
      <li>{name}</li>
      <li>{email}</li>
      <li>{phone}</li>
    </ul>
  );
}

export default ClietItems;
