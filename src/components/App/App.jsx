import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { useEffect, useState } from 'react';
import { PopupContext } from '../../contexts/PopupContext';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SuccessPopup from '../SuccessPopup/SuccessPopup';
import newsApi from '../../api/NewsApi.js';
import PreLoader from '../Preloader/PreLoader';
import NotFound from '../NotFound/NotFound';
import mainApi from '../../api/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useHistory, useLocation } from 'react-router-dom';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [isMenuPanelOpen, setIsMenuPanelOpen] = useState(false);

  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [searchKeywords, setSearchKeywords] = useState('');
  const [articlesNotFound, setArticlesNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchFieldEmpty, setIsSearhFieldEmpty] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [responseError, setResponseError] = useState('');
  const [loading, setLoading] = useState(false);

  const [currentUser, setCurrerntUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem('jwt'));

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (token) {
      mainApi
        .getUserInfo(token)
        .then((response) => {
          setIsLoggedIn(true);
          setCurrerntUser(response.data);
        })
        .catch((error) => console.log(error));
    } else {
      setIsLoggedIn(false);
    }
  }, [token, savedArticles]);

  useEffect(() => {
    if (token) {
      mainApi
        .getUserArticles(token)
        .then((response) => {
          setSavedArticles(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);

  const handleRegister = (event, inputs, closePopup) => {
    event.preventDefault();
    const { email, password, name } = inputs;
    setLoading(true);

    mainApi
      .register({ name, email, password })
      .then(() => {
        handleSignUpSubmitButton(closePopup);
      })
      .catch((error) => {
        if (error === 400) {
          setResponseError('One of the fields was filled in incorrectly');
        } else if (error === 409) {
          setResponseError('This User is already exists');
        } else {
          setResponseError(`Something went wrong: ${error}`);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLogin = (event, inputs, closePopup) => {
    event.preventDefault();
    const { email, password } = inputs;
    setLoading(true);

    mainApi
      .authorize({ email, password })
      .then((user) => {
        setToken(user.token);
        setIsLoggedIn(true);
        handleSignInSubmitButton(closePopup);
      })
      .catch((error) => {
        if (error === 400) {
          setResponseError('One or more of the fields were not provided');
        } else if (error === 401) {
          setResponseError('Incorrect email address or password');
        } else {
          setResponseError(`Something went wrong: ${error}`);
        }
      })
      .finally(() => setLoading(false));
  };

  const findNews = (event, keywords) => {
    event.preventDefault();
    setSearchKeywords(keywords);
    setArticlesNotFound(false);

    if (keywords === '') {
      setIsSearhFieldEmpty(true);
      return;
    }

    setIsLoading(true);

    newsApi
      .findNewsByKeywords(keywords)
      .then((data) => updateArticlesState(data))
      .catch((error) => {
        if (error === 400) {
          setArticlesNotFound(true);
          setArticles([]);
          console.log('No matches was found by this keywords');
        } else if (error === 404) {
          console.log('Request resource not found');
        } else {
          console.log(`Error while initializing data: ${error}`);
        }
      })
      .finally(() => setIsLoading(false));
  };

  const updateArticlesState = (data) => {
    if (data.articles.length > 0) {
      if (savedArticles.length > 0 && isLoggedIn) {
        const getSavedArticleTitles = savedArticles
          .map((savedArticle) => savedArticle.title)
          .filter(
            (title) =>
              data.articles.map((article) => article.title).indexOf(title) > -1
          );

        const updatedArticles = data.articles.map((article) =>
          getSavedArticleTitles.includes(article.title) === true
            ? { ...article, marked: true }
            : { ...article, marked: false }
        );

        setArticles(updatedArticles);
      } else {
        setArticles(data.articles);
        data.articles.map((item) => (item.marked = false));
      }
    } else {
      setArticlesNotFound(true);
      setArticles([]);
    }
  };

  const handleDeleteArticle = (article) => {
    mainApi
      .deleteArticle(token, article._id || article.source.id)
      .then(() => {
        setSavedArticles((articleArray) =>
          articleArray.filter((a) => a._id !== article.source.id)
        );

        setArticles((articleState) =>
          articleState.map((a) =>
            a.title === article.title
              ? { ...a, marked: false, source: { ...a.source, id: null } }
              : a
          )
        );
      })
      .catch((error) => console.log(error));
  };

  const handleSaveArticle = (article) => {
    mainApi
      .saveArticle(token, article, searchKeywords)
      .then((newArticle) => {
        setSavedArticles([
          { ...newArticle.data, marked: true },
          ...savedArticles,
        ]);

        setArticles((state) =>
          state.map((c) =>
            c.title === article.title
              ? {
                  ...c,
                  marked: true,
                }
              : c
          )
        );
      })
      .catch((error) => console.log(error));
  };

  const handleCardButtonClick = (article) => {
    if (isLoggedIn) {
      if (article.owner === currentUser._id || article.marked === true) {
        handleDeleteArticle({
          ...article,
          source: {
            ...article.source,
            id: savedArticles.find((f) => f.title === article.title)._id,
          },
        });
      } else {
        handleSaveArticle(article);
      }
    } else {
      openSignInPopup();
    }
  };

  const handleSignOutButton = () => {
    localStorage.removeItem('jwt');
    setArticles([]);
    setIsLoggedIn(false);
    history.push('/');
  };

  const openMenuPanel = () => {
    setIsMenuPanelOpen(true);
  };

  const closeMenuPanel = () => {
    setIsMenuPanelOpen(false);
  };

  const handleSignInButton = () => {
    openSignInPopup();
  };

  const handleSignUpSubmitButton = (closePopup) => {
    closePopup();

    setTimeout(() => {
      openSuccessPopup();
    }, 300);
  };

  const handleSignInSubmitButton = (closePopup) => {
    closePopup();
  };

  const openSignInPopup = () => {
    setIsSignInPopupOpen(true);
    setIsPopupOpen(true);
  };

  const closeSignInPopup = () => {
    setIsSignInPopupOpen(false);
    setIsPopupOpen(false);

    setTimeout(() => {
      setResponseError('');
    }, 300);
  };

  const closeSignUpPopup = () => {
    setIsSignUpPopupOpen(false);
    setIsPopupOpen(false);
    setResponseError('');

    setTimeout(() => {
      setResponseError('');
    }, 300);
  };

  const openSuccessPopup = () => {
    setIsSuccessPopupOpen(true);
    setIsPopupOpen(true);
  };

  const closeSuccessPopup = () => {
    setIsSuccessPopupOpen(false);
    setIsPopupOpen(false);
  };

  const handleSuccessPopupButton = () => {
    closeSuccessPopup();
    openSignInPopup();
  };

  const togglePopup = () => {
    setIsSignUpPopupOpen(!isSignUpPopupOpen);
    setIsSignInPopupOpen(!isSignInPopupOpen);

    setResponseError('');
  };

  const handleMenuRedirectButton = () => {
    setIsMenuPanelOpen(false);
  };

  const handleSignInMenuButton = () => {
    openSignInPopup();
    setIsMenuPanelOpen(false);
  };

  const handleSignOutMenuButton = () => {
    setIsMenuPanelOpen(false);

    setTimeout(() => {
      handleSignOutButton();
    }, 1000);
  };

  return (
    <PopupContext.Provider
      value={{
        isPopupOpen,
        setIsPopupOpen,
      }}
    >
      <CurrentUserContext.Provider value={currentUser}>
        <div className='app'>
          <SuccessPopup
            title='Registration successfully completed!'
            isOpen={isSuccessPopupOpen}
            onClose={closeSuccessPopup}
            onRedirectButtonClick={handleSuccessPopupButton}
          />

          <Register
            loading={loading}
            isOpen={isSignUpPopupOpen}
            responseError={responseError}
            onClose={closeSignUpPopup}
            onSubmit={handleRegister}
            togglePopup={togglePopup}
          />

          <Login
            loading={loading}
            isOpen={isSignInPopupOpen}
            responseError={responseError}
            onClose={closeSignInPopup}
            onSubmit={handleLogin}
            togglePopup={togglePopup}
          />

          <Header
            isLoggedIn={isLoggedIn}
            isSearchFieldEmpty={isSearchFieldEmpty}
            isMenuPanelOpen={isMenuPanelOpen}
            savedArticles={savedArticles}
            onMenuPanelOpen={openMenuPanel}
            onMenuPanelClose={closeMenuPanel}
            onSavedNewsButtonClick={() => setArticlesNotFound(false)}
            onSignInButtonClick={handleSignInButton}
            onSignOutButtonClick={handleSignOutButton}
            onRedirectMenuButtonClick={handleMenuRedirectButton}
            onSignInMenuButtonClick={handleSignInMenuButton}
            onSignOutMenuButtonClick={handleSignOutMenuButton}
            onSearchButtonClick={findNews}
          />

          {isLoading && <PreLoader />}

          {location.pathname === '/' && articlesNotFound && <NotFound />}

          <Main
            isLoggedIn={isLoggedIn}
            articles={articles}
            savedArticles={savedArticles}
            isLoading={isLoading}
            onCardClickButton={handleCardButtonClick}
          />

          <Footer savedArticles={savedArticles}></Footer>
        </div>
      </CurrentUserContext.Provider>
    </PopupContext.Provider>
  );
}

export default App;
