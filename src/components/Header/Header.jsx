import './Header.css';
import NavBar from '../NavBar/NavBar';
import SearchForm from '../SearchForm/SearchForm';
import { useLocation } from 'react-router-dom';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import { useContext } from 'react';
import { PopupContext } from '../../contexts/PopupContext';
import MenuPanel from '../MenuPanel/MenuPanel';

const Header = (props) => {
  const { isPopupOpen } = useContext(PopupContext);
  const location = useLocation();

  const setHeader = isPopupOpen ? 'header header_effect_blur' : 'header';

  return (
    <header
      className={
        location.pathname === '/' ? setHeader : 'header header_saved-articles'
      }
    >
      <NavBar
        isLoggedIn={props.isLoggedIn}
        isMenuPanelOpen={props.isMenuPanelOpen}
        onSavedNewsButtonClick={props.onSavedNewsButtonClick}
        onMenuPanelOpen={props.onMenuPanelOpen}
        onSignInButtonClick={props.onSignInButtonClick}
        onSignOutButtonClick={props.onSignOutButtonClick}
      />

      <MenuPanel
        isLoggedIn={props.isLoggedIn}
        isMenuPanelOpen={props.isMenuPanelOpen}
        onMenuPanelClose={props.onMenuPanelClose}
        onRedirectMenuButtonClick={props.onRedirectMenuButtonClick}
        onSignInMenuButtonClick={props.onSignInMenuButtonClick}
        onSignOutMenuButtonClick={props.onSignOutMenuButtonClick}
      />

      {location.pathname === '/' && (
        <SearchForm
          isSearchFieldEmpty={props.isSearchFieldEmpty}
          onSearchButtonClick={props.onSearchButtonClick}
        />
      )}

      {location.pathname === '/saved-news' && (
        <SavedNewsHeader savedArticles={props.savedArticles} />
      )}
    </header>
  );
};

export default Header;
