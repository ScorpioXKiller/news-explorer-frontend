import Button from '../Button/Button';
import Popup from '../Popup/Popup';

const PopupWithForm = ({
  name,
  title,
  isOpen,
  onClose,
  children,
  ...props
}) => {
  return (
    <Popup name={name} title={title} isOpen={isOpen} onClose={onClose}>
      <form className='auth-form' name={props.name} onSubmit={props.onSubmit}>
        {children}

        <Button
          className='auth-form__submit-button'
          type='submit'
          title='Submit'
          disabled={!props.isValid}
        >
          {props.submitButtonTitle}
        </Button>

        <div className='auth-form__redirect-wrapper'>
          <button
            className='auth-form__redirect-button'
            type='button'
            title={props.linkText}
            onClick={props.togglePopup}
          >
            or
            <span className='auth-form__link-text'>&nbsp;{props.linkText}</span>
          </button>
        </div>
      </form>
    </Popup>
  );
};

export default PopupWithForm;
