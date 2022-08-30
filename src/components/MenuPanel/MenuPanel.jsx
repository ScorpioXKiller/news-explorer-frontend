import { NavLink, useLocation } from 'react-router-dom';
import { useClosingByEscape } from '../../hooks/useClosingByEscape';
import SignInButton from '../SignInButton/SignInButton';
import SignOutButton from '../SignOutHeaderButton/SignOutButton';
import './MenuPanel.css';

const MenuPanel = (props) => {
  const location = useLocation();

  useClosingByEscape(props.isMenuPanelOpen, props.onMenuPanelClose);

  return (
    <>
      <div
        className={
          props.isMenuPanelOpen
            ? 'menu-panel__page menu-panel__page_overlay'
            : 'menu-panel__page'
        }
        onClick={props.onMenuPanelClose}
      ></div>

      <div
        className={`${
          props.isMenuPanelOpen ? 'menu-panel menu-panel_visible' : 'menu-panel'
        }`}
      >
        <div className='menu-panel__header'>
          <h1 className='title menu-panel__title'>NewsExplorer</h1>

          <button
            className='menu-panel__close-button'
            type='button'
            title='Close'
            onClick={props.onMenuPanelClose}
          ></button>
        </div>

        <div className='menu-panel__container'>
          {location.pathname === '/' ? (
            <NavLink
              to='/saved-news'
              className='menu-panel__home-link'
              onClick={props.onRedirectMenuButtonClick}
            >
              Saved Articles
            </NavLink>
          ) : (
            <NavLink
              to='/'
              className='menu-panel__home-link'
              onClick={props.onRedirectMenuButtonClick}
            >
              Home
            </NavLink>
          )}

          {props.isLoggedIn ? (
            <SignOutButton
              className={`menu-panel__button`}
              titleClassName='menu-panel__button-title'
              iconClassName='menu-panel__signout-button-icon'
              onClick={props.onSignOutMenuButtonClick}
            />
          ) : (
            <SignInButton
              className={`menu-panel__button`}
              titleClassName='menu-panel__button-title'
              onClick={props.onSignInMenuButtonClick}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MenuPanel;
