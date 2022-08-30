import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import logOutIconBlack from '../../images/logout-icon-black.svg';
import logOutIconWhite from '../../images/logout-icon-white.svg';

const SignOutButton = (props) => {
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);

  const setIconColor =
    props.isMenuPanelOpen === true ? logOutIconWhite : logOutIconBlack;

  return (
    <button
      className={props.className}
      type='button'
      title='Sign out'
      onClick={props.onClick}
    >
      <p className={props.titleClassName}>{currentUser.name}</p>

      <img
        src={location.pathname === '/' ? logOutIconWhite : setIconColor}
        className={props.iconClassName}
        alt='Log Out'
      />
    </button>
  );
};

export default SignOutButton;
