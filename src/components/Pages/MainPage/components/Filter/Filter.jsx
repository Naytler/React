import './Filter.css';
import Button from '../../../../UIKit/Button/Button/Button';

function Filter({
  handleSelectChange,
  onPageChange,
  valueDef,
  lengthData,
  setDataPaint,
  setInputVal,
  setShowData,
  selectedValue,
}) {
  const handleDecrement = () => {
    if (valueDef > 1) {
      setDataPaint((prev) => parseInt(prev - selectedValue));
      setInputVal(valueDef - 1);
      setShowData((prev) => parseInt(prev - selectedValue));
    }
  };

  const handleIncrement = () => {
    if (valueDef < lengthData) {
      setDataPaint((prev) => +prev + +selectedValue);
      setInputVal(valueDef + 1);
      setShowData((prev) => +prev + +selectedValue);
    }
  };
  return (
    <>
      <div className="Filter">
        <span>Показывать</span>
        <select className="filter__select" name="selecе" id="" onChange={handleSelectChange}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <span>Страница</span>
        <input className="filter__input" type="text" value={valueDef} onChange={onPageChange} />
        <span>из {lengthData}</span>
        <Button onClick={handleDecrement}>{'<'}</Button>
        <Button onClick={handleIncrement}>{'>'}</Button>
      </div>
    </>
  );
}

export default Filter;
