import Popup from '../Popup/Popup';
import './SuccessPopup.css';

const SuccessPopup = (props) => {
  return (
    <Popup
      name='success-popup'
      title={props.title}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <button
        className='success-popup__redirect-button'
        type='button'
        title='Sign in'
        onClick={props.onRedirectButtonClick}
      >
        Sign in
      </button>
    </Popup>
  );
};

export default SuccessPopup;
