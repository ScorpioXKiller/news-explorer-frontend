import './Popup.css';

const Popup = ({ name, isOpen, onClose, children }) => {
  return (
    <div
      className={
        isOpen
          ? `popup popup_type_${name} popup_visible`
          : `popup popup_type_${name}`
      }
    >
      <div className='popup__page-overlay' onClick={onClose}></div>

      <div className='popup__container'>
        <button
          className='popup__close-button'
          type='button'
          title='Close'
          aria-label='close'
          onClick={onClose}
        ></button>

        {children}
      </div>
    </div>
  );
};

export default Popup;
