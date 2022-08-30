import useFormValidation from '../../hooks/useFormValidation';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './AuthForm.css';

const AuthForm = (props) => {
  const { inputs, errors, isValid, handleChange, resetForm } =
    useFormValidation();

  const closeForm = () => {
    props.onClose();

    setTimeout(() => {
      resetForm();
    }, 300);
  };

  const toggleForm = () => {
    props.togglePopup();

    setTimeout(() => {
      resetForm();
    }, 300);
  };

  return (
    <PopupWithForm
      name={props.name}
      title={props.title}
      linkText={props.linkText}
      isValid={isValid}
      submitButtonTitle={props.submitButtonTitle}
      isOpen={props.isOpen}
      onClose={closeForm}
      onSubmit={(event) =>
        props.onSubmit(
          event,
          {
            email: inputs.email || '',
            password: inputs.password || '',
            name: inputs.username || '',
          },
          () => closeForm()
        )
      }
      togglePopup={toggleForm}
    >
      <label htmlFor='email' className='auth-form__field'>
        Email
        <input
          type='email'
          className='auth-form__input auth__input_el_user-email'
          id={props.emailInputId}
          name='email'
          placeholder='Enter email'
          required
          value={inputs.email || ''}
          onChange={handleChange}
        />
        <span className='auth-form__input-error auth-form__input-error_email_pos'>
          {errors.email}
        </span>
      </label>

      <label htmlFor='password' className='auth-form__field'>
        Password
        <input
          type='password'
          className='auth-form__input auth__input_el_user-password'
          id={props.passwordInputId}
          name='password'
          placeholder='Enter password'
          required
          minLength={8}
          maxLength={12}
          value={inputs.password || ''}
          onChange={handleChange}
        />
        <span className='auth-form__input-error auth-form__input-error_password_pos'>
          {errors.password}
        </span>
      </label>

      {props.withNameField && (
        <label htmlFor='username' className='auth-form__field'>
          Username
          <input
            type='text'
            className='auth-form__input auth__input_el_user-name'
            id='registerForm_UsernameInput'
            name='username'
            placeholder='Username'
            required
            minLength={2}
            maxLength={20}
            value={inputs.username || ''}
            onChange={handleChange}
          />
          <span className='auth-form__input-error auth-form__input-error_username_pos'>
            {errors.username}
          </span>
        </label>
      )}
      <p className='auth-form__response-error'>{props.responseError}</p>
    </PopupWithForm>
  );
};

export default AuthForm;
