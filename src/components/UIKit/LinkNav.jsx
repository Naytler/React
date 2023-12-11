import { NavLink } from 'react-router-dom';
import './LinkNav.css';

function LinkNav({ text, image, to }) {
  return (
    <NavLink to={to} className="linkNav" activeclassname="active">
      {image}
      {text}
    </NavLink>
  );
}

export default LinkNav;
