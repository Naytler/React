import Button from '../../Button/Button';
import styles from './Filter.module.scss';

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
    <div className={styles.Filter}>
      <span>Показывать</span>
      <select className={styles.filter__select} name="selecе" id="" onChange={handleSelectChange}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <span>Страница</span>
      <input className={styles.filter__input} type="text" value={valueDef} onChange={onPageChange} readOnly />
      <span>из {lengthData}</span>
      <Button onClick={handleDecrement}>{'<'}</Button>
      <Button onClick={handleIncrement}>{'>'}</Button>
    </div>
  );
}

export default Filter;
