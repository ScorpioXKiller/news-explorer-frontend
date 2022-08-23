import { useClosingByEscape } from '../../hooks/useClosingByEscape';
import AuthForm from '../AuthForm/AuthForm';

const Login = (props) => {
  useClosingByEscape(props.isOpen, props.onClose);

  return (
    <AuthForm
      name='sign-in-popup'
      title='Sign in'
      linkText='Sign up'
      emailInputId='loginForm_EmailInput'
      passwordInputId='loginForm_PasswordInput'
      submitButtonTitle={props.signInSubmitButtonTitle}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={props.onSubmit}
      togglePopup={props.togglePopup}
    />
  );
};

export default Login;
