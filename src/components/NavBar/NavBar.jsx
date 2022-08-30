import { NavLink, useLocation } from 'react-router-dom';
import SignOutButton from '../SignOutHeaderButton/SignOutButton';
import SignInButton from '../SignInButton/SignInButton';
import './NavBar.css';

const NavBar = (props) => {
  const location = useLocation();

  const setButtonTheme =
    location.pathname === '/'
      ? 'navbar__button navbar__button_theme_white'
      : 'navbar__button navbar__button_theme_dark';

  return (
    <nav
      className={
        location.pathname === '/' ? 'navbar' : 'navbar navbar_theme_dark'
      }
    >
      <p
        className={
          location.pathname === '/' ? 'title' : 'title title_theme_dark'
        }
      >
        NewsExplorer
      </p>

      <div className='navbar__items'>
        <NavLink
          to='/'
          activeClassName={
            location.pathname === '/' ? 'navbar__home-link_active' : ''
          }
          className={
            location.pathname === '/'
              ? 'navbar__home-link'
              : 'navbar__home-link navbar__home-link_theme_dark'
          }
        >
          Home
        </NavLink>

        {props.isLoggedIn && (
          <NavLink
            to='/saved-news'
            activeClassName={
              location.pathname === '/saved-news'
                ? 'navbar__saved-articles_active'
                : ''
            }
            className={
              location.pathname === '/'
                ? 'navbar__saved-articles-link'
                : 'navbar__saved-articles-link navbar__saved-articles-link_theme_dark'
            }
            onClick={props.onSavedNewsButtonClick}
          >
            Saved articles
          </NavLink>
        )}

        {props.isLoggedIn ? (
          <SignOutButton
            isMenuPanelOpen={props.isMenuPanelOpen}
            className={`navbar__button navbar__logout-button ${setButtonTheme}`}
            titleClassName='navbar__button-title'
            iconClassName='navbar__logout-button-icon'
            onClick={props.onSignOutButtonClick}
          />
        ) : (
          <SignInButton
            className={`navbar__button navbar__signin-button ${setButtonTheme}`}
            titleClassName='navbar__button-title navbar__button-title_align_center'
            onClick={props.onSignInButtonClick}
          />
        )}
      </div>

      <button
        className={
          location.pathname === '/'
            ? 'navbar__menu-button'
            : 'navbar__menu-button navbar__menu-button_theme_dark'
        }
        type='button'
        title='Menu'
        onClick={props.onMenuPanelOpen}
      ></button>
    </nav>
  );
};

export default NavBar;
