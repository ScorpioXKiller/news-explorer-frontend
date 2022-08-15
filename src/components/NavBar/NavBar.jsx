import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './NavBar.css';

const NavBar = (props) => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    history.push('/');
  }, [history]);

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
        >
          Saved articles
        </NavLink>

        <button
          className={
            location.pathname === '/'
              ? 'navbar__button navbar__signin-button'
              : 'navbar__button navbar__logout-button'
          }
          type='button'
          title={location.pathname === '/' ? 'Sign in' : 'Log out'}
          onClick={
            location.pathname === '/'
              ? props.onSignInButtonClick
              : () => history.push('/')
          }
        >
          {location.pathname === '/' ? 'Sign in' : 'Elise'}
        </button>
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
