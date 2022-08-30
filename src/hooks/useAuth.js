import { useEffect, useState } from 'react';
import mainApi from '../api/MainApi';

function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState('');

  const [token, setToken] = useState(localStorage.getItem('jwt'));

  useEffect(() => {
    if (token) {
      mainApi
        .getUserInfo(token)
        .then((response) => {
          setIsLoggedIn(true);
          setUserName(response.data.name);
        })
        .catch((error) => console.log(error));
    } else {
      setIsLoggedIn(false);
    }
  }, [token, userName]);

  const handleRegister = (event, inputs, callback) => {
    event.preventDefault();
    const { email, password, name } = inputs;
    setLoading(true);

    mainApi
      .register({ name, email, password })
      .then(() => {
        setIsRegistered(true);
        callback();
      })
      .catch((error) => {
        setIsRegistered(false);

        if (error === 400) {
          console.log('One of the fields was filled in incorrectly');
        } else if (error === 409) {
          console.log('The User is already exists');
        } else {
          console.log(`Something went wrong: ${error}`);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLogin = (event, inputs, callback) => {
    event.preventDefault();
    const { email, password } = inputs;
    setLoading(true);

    mainApi
      .authorize({ email, password })
      .then((response) => {
        setToken(response.token);
        //setUserName(response.data.name);
        setIsLoggedIn(true);
        callback();
      })
      .catch((error) => {
        if (error === 400) {
          console.log('One or more of the fields were not provided');
        } else if (error === 401) {
          console.log('Incorrect email address or password');
        } else {
          console.log(`Something went wrong: ${error}`);
        }
      })
      .finally(() => setLoading(false));
  };

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    // setUserName('Sign in');
    //setIsLoggedIn(false);
  };

  return {
    userName,
    isLoggedIn,
    isRegistered,
    loading,
    handleRegister,
    handleLogin,
    handleSignOut,
    setIsLoggedIn,
    setIsRegistered,
  };
}

export default useAuth;
