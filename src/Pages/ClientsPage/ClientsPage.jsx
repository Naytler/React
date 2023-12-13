import React, { useEffect, useState } from 'react';
import MOC_CLIENTS_DATA from '../../constants/clients.js';
import Filter from '../../components/UIKit/componentsFilter/Filter/Filter.jsx';
import Items from './componentsFilter/Items/ClietItems.jsx';
import ItemTop from './componentsFilter/ItemTop/ClientItemTop.jsx';
import Input from './componentsFilter/Input/Input.jsx';
import styles from './ClientsPage.module.scss';

function ClientsPage() {
  const updatedClientsData = MOC_CLIENTS_DATA.map((client, index) => ({
    ...client,
    id: index + 1,
  }));
  const [safeData, setSafeData] = useState(updatedClientsData);
  const [filteredElements, setFilteredElements] = useState(safeData);
  const [selectedValue, setSelectedValue] = useState(10);
  const [inputVal, setInputVal] = useState(1);
  const [dataPaint, setDataPaint] = useState(0);
  const [showData, setShowData] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [lengthDataArr, setLengthDataArr] = useState(Math.ceil(safeData.length / selectedValue));
  const [delInput, setDelInput] = useState(true);

  let lengthData = Math.ceil(safeData.length / selectedValue);

  useEffect(() => {
    const filterData = () => {
      const buttonChange = safeData.slice(dataPaint, +showData + +selectedValue);
      setFilteredElements(buttonChange);
    };
    inputVal == 1 ? setShowData(0) : '';
    filterData();
  }, [safeData, showData, delInput]);

  useEffect(() => {
    const selectChange = safeData.slice(dataPaint, selectedValue);
    setFilteredElements(selectChange);
  }, [selectedValue]);

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
    setInputVal(1);
    setFilteredElements(safeData);
    setDataPaint(0);
  };

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);

    const foundItems = safeData.filter((item) => item.name.includes(e.target.value));
    setFilteredElements(foundItems);
    setLengthDataArr(1);
    setInputVal(1);
    if (e.target.value === '') {
      setDelInput(!delInput);
      setLengthDataArr(Math.ceil(safeData.length / selectedValue));
      setDataPaint(0);
      setFilteredElements(safeData);
    }
  };

  return (
    <div className={styles.сlientsPage}>
      <Input
        inputValue={inputValue}
        setInputValue={setInputValue}
        safeData={safeData}
        setFilteredElements={setFilteredElements}
        handleChangeInput={handleChangeInput}
        setSelectedValue={setSelectedValue}
        setDelInput={setDelInput}
        delInput={delInput}
      />
      <Filter
        handleSelectChange={handleSelectChange}
        valueDef={inputVal}
        lengthData={lengthDataArr}
        setDataPaint={setDataPaint}
        setInputVal={setInputVal}
        setShowData={setShowData}
        selectedValue={selectedValue}
        setFilteredElements={setFilteredElements}
        safeData={safeData}
      />
      <ItemTop />
      <div className={styles.clientsitemsBlock}>
        {filteredElements.map((filteredElements) => (
          <Items key={filteredElements.id} {...filteredElements} />
        ))}
      </div>
    </div>
  );
}

export default ClientsPage;
