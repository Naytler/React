import React, { useEffect, useState } from 'react';
import data from '../../../constants/products.jsx';
import Filter from './components/Filter/Filter';
import Button from '../../UIKit/Button/Button/Button';
import ItemTop from './components/ItemTop/ItemTop';
import Items from './components/items/Items.jsx';
import Modale from '../../Modale/Modale.jsx';
import ModaleSmall from '../../ModaleSmall/ModaleSmall.jsx';
import './MainPage.css';

function MainPage() {
  const [safeData, setSafeData] = useState(data);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(10);
  const [filteredElements, setFilteredElements] = useState(safeData);
  const [inputVal, setInputVal] = useState(1);
  const [dataPaint, setDataPaint] = useState(0);
  const [showData, setShowData] = useState(0);

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
  // console.log(lengthData);

  useEffect(() => {
    const filterData = () => {
      const buttonChange = safeData.slice(dataPaint, +showData + +selectedValue);
      setFilteredElements(buttonChange);
    };
    filterData();
  }, [showData, safeData]);

  useEffect(() => {
    const selectChange = safeData.slice(dataPaint, selectedValue);
    setFilteredElements(selectChange);
  }, [selectedValue]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    let object = {
      category: dataAdd.category,
      subCategory: dataAdd.subCategory,
      brand: dataAdd.brand,
      goods: dataAdd.goods,
      cashback: dataAdd.cashback,
      id: safeData.length + 1,
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

  const headerCheckboxChange = () => {
    const allChecked = safeData.every((item) => item.checked);
    const updatedList = safeData.map((item) => ({
      ...item,
      checked: !allChecked,
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
  };

  const onDelete = () => {
    const newList = safeData.filter((item) => !item.checked);
    setSafeData(newList);

    const newCurrentPage = Math.ceil(newList.length / selectedValue);
    console.log(newCurrentPage);
    console.log(inputVal);
    if (newCurrentPage < inputVal) {
      setDataPaint((prev) => parseInt(prev - selectedValue));
      setInputVal(inputVal - 1);
      setShowData((prev) => parseInt(prev - selectedValue));
    }
    // setSafeData(newCurrentPage > 0 ? newCurrentPage : 1);
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
      <Button onClick={openModal} size={'large'} color={'pink'}>
        Добавить акцию
      </Button>
      {isOpen && <Modale closeModal={closeModal} setDataAdd={setDataAdd} clearModale={handleDeleteinput} />}
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
      <ModaleSmall data={safeData} onDelete={onDelete} />
    </div>
  );
}

export default MainPage;
