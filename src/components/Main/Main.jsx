import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { PopupContext } from '../../contexts/PopupContext';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNews from '../SavedNews/SavedNews';
import './Main.css';

const Main = () => {
  const { isPopupOpen } = useContext(PopupContext);
  const location = useLocation();

  return (
    <main className={isPopupOpen ? 'main main_effect_blur' : 'main'}>
      {location.pathname === '/saved-news' ? <SavedNews /> : <NewsCardList />}

      {location.pathname === '/' && <About />}
    </main>
  );
};

export default Main;
