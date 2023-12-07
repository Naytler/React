import './ModaleSmall.css';
import logo from '../../images/modaleSmall/Vector.svg';
import close from '../../images/modaleSmall/x.svg';
import { useState } from 'react';

function ModaleSmall({ data, onDelete, hideSmallModale, setHideSmallModale }) {
  const counter = data.filter((item) => item.checked).length;

  let transpar = counter > 0 ? 'show' : 'hide';

  const handleCloseModal = () => {
    setHideSmallModale('hide');
  };

  return (
    <>
      <div className={`modaleSmall ${transpar} ${hideSmallModale}`}>
        <button onClick={handleCloseModal}>
          <img className="close" src={close} alt="close" />
        </button>
        <p>
          Количество выбранных позиций: <span>{counter}</span>
        </p>
        <button className="modaleSmallButton" onClick={onDelete}>
          <img src={logo} alt="button" />
          <span>Удалить</span>
        </button>
      </div>
    </>
  );
}

export default ModaleSmall;
