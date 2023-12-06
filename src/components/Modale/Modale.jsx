import React, { useState } from 'react';
import Button from '../UIKit/Button/Button/Button';
import './Modale.css';

function Modale({ closeModal, setDataAdd, clearModale }) {
  const inputChange = (e) => {
    setDataAdd((prevData) => ({
      ...prevData,
      cashback: e.target.value,
    }));
  };
  const chooseCategory = (e) => {
    setDataAdd((prevData) => ({
      ...prevData,
      category: e.target.value,
    }));
  };

  const chooseSubCategory = (e) => {
    setDataAdd((prevData) => ({
      ...prevData,
      subCategory: e.target.value,
    }));
  };

  const chooseBrand = (e) => {
    setDataAdd((prevData) => ({
      ...prevData,
      brand: e.target.value,
    }));
  };

  return (
    <>
      <div className="background">
        <div className="modale">
          <div className="modale__button">
            <Button onClick={clearModale} size={'medium'} color={'transparent'}>
              Удалить
            </Button>
            <Button onClick={closeModal} size={'medium'} color={'pink'}>
              Сохранить
            </Button>
          </div>
          <p>Начисление кешбека с покупки</p>
          <input className="modale__input" type="text" placeholder="20%" onChange={inputChange} />
          <p>Категория</p>
          <select className="modale__select" name="" id="" onChange={chooseCategory}>
            <option value="Название категории1">Название категории1</option>
            <option value="Название категории2">Название категории2</option>
            <option value="Название категории3">Название категории3</option>
          </select>
          <p>Подкатегория</p>
          <select className="modale__select" name="" id="" onChange={chooseSubCategory}>
            <option value="новый1">новый1 </option>
            <option value="новый2">новый2 </option>
            <option value="новый3">новый3 </option>
          </select>
          <p>Бренд</p>
          <select className="modale__select" name="" id="" onChange={chooseBrand}>
            <option value="Имя бренда1">Имя бренда1</option>
            <option value="Имя бренда2">Имя бренда2</option>
            <option value="Имя бренда3">Имя бренда3</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Modale;
