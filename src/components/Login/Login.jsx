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
      loading={props.loading}
      submitButtonTitle={
        !props.loading ? 'Sign in' : 'Sign in... Please wait...'
      }
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={props.onSubmit}
      togglePopup={props.togglePopup}
      responseError={props.responseError}
    />
  );
};

export default Login;
