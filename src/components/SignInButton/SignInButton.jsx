const SignInButton = (props) => {
  return (
    <button
      className={props.className}
      type='button'
      title='Sign in'
      onClick={props.onClick}
    >
      <p className={props.titleClassName}>Sign in</p>
    </button>
  );
};

export default SignInButton;
