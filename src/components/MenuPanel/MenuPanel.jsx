import { NavLink } from 'react-router-dom';
import { useClosingByEscape } from '../../hooks/useClosingByEscape';
import Button from '../Button/Button';
import './MenuPanel.css';

const MenuPanel = (props) => {
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
          <NavLink
            to='/'
            className='menu-panel__home-link'
            onClick={props.onHomeMenuButtonClick}
          >
            Home
          </NavLink>

          <Button
            className='menu-panel__signin-button'
            type='button'
            title='Sign in'
            onClick={props.onSignInMenuButtonClick}
          >
            Sign in
          </Button>
        </div>
      </div>
    </>
  );
};

export default MenuPanel;
