import { useClosingByEscape } from '../../hooks/useClosingByEscape';
import AuthForm from '../AuthForm/AuthForm';

const Register = (props) => {
  useClosingByEscape(props.isOpen, props.onClose);

  return (
    <AuthForm
      withNameField
      name='sign-up-popup'
      title='Sign up'
      linkText='Sign in'
      emailInputId='registerForm_EmailInput'
      passwordInputId='registerForm_PasswordInput'
      submitButtonTitle={props.signUpSubmitButtonTitle}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={props.onSubmit}
      togglePopup={props.togglePopup}
    ></AuthForm>
  );
};

export default Register;
