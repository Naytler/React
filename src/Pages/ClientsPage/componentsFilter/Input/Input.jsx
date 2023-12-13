import React from 'react';
import Encancelfill from '../../../../images/clients/Encancelfill';
import Ensearch from '../../../../images/clients/Ensearch';
import styles from './Input.module.scss';

function Input({ inputValue, setInputValue, handleChangeInput, setSelectedValue, delInput, setDelInput }) {
  const handleCleanInput = () => {
    setInputValue('');
    setSelectedValue(10);
    setDelInput(!delInput);
  };

  return (
    <div className={styles.inputCust}>
      <span className={styles.search}>
        <Ensearch />{' '}
      </span>
      <input className={styles.input} type="text" placeholder="поиск" value={inputValue} onChange={handleChangeInput} />
      <button onClick={handleCleanInput} className={styles.button}>
        <Encancelfill />
      </button>
    </div>
  );
}

export default Input;

// настроить фильтрацию связать к одному состонию после введения инпут
