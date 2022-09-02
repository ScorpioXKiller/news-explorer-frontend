import { useContext } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { PopupContext } from '../../contexts/PopupContext';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SavedNews from '../SavedNews/SavedNews';
import './Main.css';

const Main = (props) => {
  const { isPopupOpen } = useContext(PopupContext);
  const location = useLocation();

  return (
    <main className={isPopupOpen ? 'main main_effect_blur' : 'main'}>
      {location.pathname === '/' &&
        props.articles?.length > 0 &&
        !props.isLoading && (
          <NewsCardList
            articles={props.articles}
            isLoggedIn={props.isLoggedIn}
            onCardClickButton={props.onCardClickButton}
          />
        )}

      <Switch>
        <ProtectedRoute exact isLoggedIn={props.isLoggedIn} path='/saved-news'>
          {props.savedArticles.length !== 0 && (
            <SavedNews
              savedArticles={props.savedArticles}
              isLoggedIn={props.isLoggedIn}
              onCardClickButton={props.onCardClickButton}
            />
          )}
        </ProtectedRoute>
      </Switch>

      {location.pathname === '/' && <About />}
    </main>
  );
};

export default Main;
