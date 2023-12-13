import './Button.scss';

function Button({ size, color, children, onClick }) {
  const buttonSizeClass = size === 'medium' ? 'button-medium' : size === 'large' ? 'large-button' : 'button-small';
  const buttonColorClass =
    color === 'transparent' ? 'button-transparent' : color === 'pink' ? 'button-pink' : 'grey-button';
  const buttonClass = `${buttonSizeClass} ${buttonColorClass}`;
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
