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
        onMenuPanelOpen={props.onMenuPanelOpen}
        onSignInButtonClick={props.onSignInButtonClick}
      />

      <MenuPanel
        isMenuPanelOpen={props.isMenuPanelOpen}
        onMenuPanelClose={props.onMenuPanelClose}
        onSignInMenuButtonClick={props.onSignInMenuButtonClick}
      />

      {location.pathname === '/' && <SearchForm />}

      {location.pathname === '/saved-news' && <SavedNewsHeader />}
    </header>
  );
};

export default Header;
