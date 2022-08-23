import './Button.css';

const Button = (props) => {
  return (
    <button
      className={`button ${props.className}`}
      type={props.type}
      title={props.title}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
