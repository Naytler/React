import './ModaleSmall.css';
import logo from '../../images/modaleSmall/Vector.svg';
import close from '../../images/modaleSmall/x.svg';

function ModaleSmall({ data, onDelete }) {
  const counter = data.filter((item) => item.checked).length;

  let transpar = counter > 0 ? 'show' : 'hide';

  return (
    <>
      <div className={`modaleSmall ${transpar}`}>
        <img className="close" src={close} alt="close" />
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
