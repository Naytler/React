import logo from '../../images/modaleSmall/Vector.svg';
import close from '../../images/modaleSmall/x.svg';
import styles from './ModaleSmall.module.scss';

function ModaleSmall({ data, onDelete, hideSmallModale, setHideSmallModale }) {
  const counter = data.filter((item) => item.checked).length;

  let transpar = counter > 0 ? styles.show : styles.hide;

  const handleCloseModal = () => {
    setHideSmallModale(styles.hide);
  };

  return (
    <div className={`${styles.modaleSmall} ${transpar} ${hideSmallModale}`}>
      <button onClick={handleCloseModal}>
        <img className={styles.close} src={close} alt="close" />
      </button>
      <p>
        Количество выбранных позиций: <span>{counter}</span>
      </p>
      <button className={styles.modaleSmallButton} onClick={onDelete}>
        <img src={logo} alt="button" />
        <span>Удалить</span>
      </button>
    </div>
  );
}

export default ModaleSmall;
