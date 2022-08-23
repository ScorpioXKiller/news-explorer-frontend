import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { useState } from 'react';
import { PopupContext } from '../../contexts/PopupContext';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SuccessPopup from '../SuccessPopup/SuccessPopup';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [isMenuPanelOpen, setIsMenuPanelOpen] = useState(false);
  const [signInSubmitButtonTitle, setSignInSubmitButtonTitle] =
    useState('Sign in');
  const [signUpSubmitButtonTitle, setSignUpSubmitButtonTitle] =
    useState('Sign up');

  const openMenuPanel = () => {
    setIsMenuPanelOpen(true);
  };

  const closeMenuPanel = () => {
    setIsMenuPanelOpen(false);
  };

  const handleSignInButton = () => {
    openSignInPopup();
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setSignInSubmitButtonTitle('Sign in... Please wait...');

    setTimeout(() => {
      setSignInSubmitButtonTitle('Sign in');
      closeSignInPopup();
    }, 1000); //for testing
  };

  const handleRegister = (event) => {
    event.preventDefault();
    setSignUpSubmitButtonTitle('Registration... Please wait...');

    setTimeout(() => {
      setSignUpSubmitButtonTitle('Sign up');
      closeSignUpPopup();
      openSuccessPopup();
    }, 1000); //for testing
  };

  const openSignInPopup = () => {
    setIsSignInPopupOpen(true);
    setIsPopupOpen(true);
  };

  const closeSignInPopup = () => {
    setIsSignInPopupOpen(false);
    setIsPopupOpen(false);
  };

  const closeSignUpPopup = () => {
    setIsSignUpPopupOpen(false);
    setIsPopupOpen(false);
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
  };

  const handleHomeMenuButton = () => {
    setIsMenuPanelOpen(false);
  };

  const handleSignInMenuButton = () => {
    openSignInPopup();
    setIsMenuPanelOpen(false);
  };

  return (
    <PopupContext.Provider
      value={{
        isPopupOpen,
        setIsPopupOpen,
      }}
    >
      <div className='app'>
        <SuccessPopup
          title='Registration successfully completed!'
          isOpen={isSuccessPopupOpen}
          onClose={closeSuccessPopup}
          onRedirectButtonClick={handleSuccessPopupButton}
        />

        <Register
          isOpen={isSignUpPopupOpen}
          signUpSubmitButtonTitle={signUpSubmitButtonTitle}
          onClose={closeSignUpPopup}
          onSubmit={handleRegister}
          togglePopup={togglePopup}
        />

        <Login
          isOpen={isSignInPopupOpen}
          signInSubmitButtonTitle={signInSubmitButtonTitle}
          onClose={closeSignInPopup}
          onSubmit={handleLogin}
          togglePopup={togglePopup}
        />

        <Header
          isMenuPanelOpen={isMenuPanelOpen}
          onMenuPanelOpen={openMenuPanel}
          onMenuPanelClose={closeMenuPanel}
          onSignInButtonClick={handleSignInButton}
          onHomeMenuButtonClick={handleHomeMenuButton}
          onSignInMenuButtonClick={handleSignInMenuButton}
        />

        <Main />

        <Footer></Footer>
      </div>
    </PopupContext.Provider>
  );
}

export default App;
