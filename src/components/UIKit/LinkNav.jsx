import { NavLink } from 'react-router-dom';
import styles from './LinkNav.module.scss';

function LinkNav({ text, image, to }) {
  return (
    <NavLink to={to} className={styles.linkNav} activeclassname={styles.active}>
      {image}
      {text}
    </NavLink>
  );
}

export default LinkNav;
