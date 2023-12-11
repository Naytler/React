import React, { useEffect, useState } from 'react';
import MOC_PRODUCTS_DATA from '../../constants/products.js';
import { Filter, ItemTop, Items, Button } from '../../components/index.js';
import Modale from '../../components/Modale/Modale.jsx';
import ModaleSmall from '../../components/ModaleSmall/ModaleSmall.jsx';
import './MainPage.css';

function MainPage() {
  const [safeData, setSafeData] = useState(MOC_PRODUCTS_DATA);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(10);
  const [filteredElements, setFilteredElements] = useState(safeData);
  const [inputVal, setInputVal] = useState(1);
  const [dataPaint, setDataPaint] = useState(0);
  const [showData, setShowData] = useState(0);
  const [hideSmallModale, setHideSmallModale] = useState('');
  const newId = `id-${Math.floor(Date.now() / 1000)}`;

  let [dataAdd, setDataAdd] = useState({
    category: 'Название категории1',
    subCategory: 'новый1',
    brand: 'Имя бренда1',
    goods: ' ',
    cashback: ' ',
    id: '',
    checked: false,
  });
  const lengthData = Math.ceil(safeData.length / selectedValue);

  useEffect(() => {
    const closeModalTaskKey = (event) => {
      if (event.keyCode === 27) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', closeModalTaskKey);
    return () => {
      window.removeEventListener('keydown', closeModalTaskKey);
    };
  }, [isOpen]);

  useEffect(() => {
    const filterData = () => {
      const buttonChange = safeData.slice(dataPaint, +showData + +selectedValue);
      setFilteredElements(buttonChange);
    };
    inputVal == 1 ? setShowData(0) : '';

    filterData();
  }, [showData, safeData]);

  useEffect(() => {
    const selectChange = safeData.slice(dataPaint, selectedValue);
    setFilteredElements(selectChange);
  }, [selectedValue]);

  const closeModal = () => {
    let object = {
      category: dataAdd.category,
      subCategory: dataAdd.subCategory,
      brand: dataAdd.brand,
      goods: dataAdd.goods,
      cashback: dataAdd.cashback,
      id: newId,
      checked: false,
    };
    setIsOpen(false);
    setSafeData([...safeData, object]);
  };

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
    setInputVal(1);
    setFilteredElements(safeData);
    setDataPaint(0);
  };

  const onPageChange = (e) => {
    setInputVal(e.target.value);
  };

  const headerCheckboxChange = (e) => {
    let allChecked;
    if (e.target.checked === true) {
      allChecked = safeData.every((item) => (item.checked = true));
    }
    if (e.target.checked === false) {
      allChecked = safeData.every((item) => (item.checked = false));
    }
    const updatedList = safeData.map((item) => ({
      ...item,
      checked: allChecked,
    }));
    setSafeData(updatedList);
  };

  const handleCheckboxChange = (id) => {
    const ssd = safeData.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      } else {
        return item;
      }
    });
    setSafeData(ssd);
    setHideSmallModale('');
  };

  const onDelete = () => {
    const newList = safeData.filter((item) => !item.checked);
    setSafeData(newList);
    const newCurrentPage = Math.ceil(newList.length / selectedValue);
    if (newCurrentPage < inputVal) {
      setDataPaint((prev) => parseInt(prev - selectedValue));
      setInputVal(inputVal - 1);
      setShowData((prev) => parseInt(prev - selectedValue));
    }
  };

  const handleDeleteinput = () => {
    setIsOpen(false);
  };

  return (
    <div className="mainPage">
      <Filter
        handleSelectChange={handleSelectChange}
        onPageChange={onPageChange}
        valueDef={inputVal}
        lengthData={lengthData}
        setDataPaint={setDataPaint}
        setInputVal={setInputVal}
        setShowData={setShowData}
        selectedValue={selectedValue}
      />
      <Button onClick={() => setIsOpen(true)} size={'large'} color={'pink'}>
        Добавить акцию
      </Button>
      {isOpen && (
        <Modale closeModal={closeModal} setDataAdd={setDataAdd} clearModale={handleDeleteinput} setIsOpen={setIsOpen} />
      )}
      <ItemTop headerCheckboxChange={headerCheckboxChange} />
      <div className="itemsBlock">
        {filteredElements.map((filteredElements) => (
          <Items
            key={filteredElements.id}
            {...filteredElements}
            onChange={() => handleCheckboxChange(filteredElements.id)}
          />
        ))}
      </div>
      <ModaleSmall
        data={safeData}
        onDelete={onDelete}
        setHideSmallModale={setHideSmallModale}
        hideSmallModale={hideSmallModale}
      />
    </div>
  );
}

export default MainPage;
