import React, { useState } from 'react';
import './Modale.css'; // Подключаем файл стилей для модального окна

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Открыть модальное окно</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <h2>Модальное окно</h2>
            <p>Содержимое модального окна...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
