import { NavLink } from 'react-router-dom';
import './LinkNav.css';

function LinkNav({ text, image, to }) {
  const clicked = () => {
    console.log('hi');
  };
  return (
    <>
      <NavLink to={to} className="linkNav" activeclassname="active">
        {image}
        {text}
      </NavLink>
    </>
  );
}

export default LinkNav;
