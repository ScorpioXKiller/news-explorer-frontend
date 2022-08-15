import Popup from '../Popup/Popup';
import './SuccessPopup.css';

const SuccessPopup = (props) => {
  return (
    <Popup name='successPopup' isOpen={props.isOpen} onClose={props.onClose}>
      <h2 className='success-popup__title'>
        Registration successfully completed!
      </h2>

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
