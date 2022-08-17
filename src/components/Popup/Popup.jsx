import './Popup.css';

const Popup = ({ name, title, isOpen, onClose, children }) => {
  return (
    <div
      className={
        isOpen
          ? `popup popup_type_${name} popup_visible`
          : `popup popup_type_${name}`
      }
    >
      <div className='popup__page-overlay' onClick={onClose}></div>

      <div className={`popup__container ${name}`}>
        <button
          className='popup__close-button'
          type='button'
          title='Close'
          aria-label='close'
          onClick={onClose}
        ></button>

        <h2 className='popup__title'>{title}</h2>

        {children}
      </div>
    </div>
  );
};

export default Popup;
