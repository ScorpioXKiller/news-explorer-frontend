import { Link } from 'react-router-dom';
import './Footer.css';
import githubIcon from '../../images/github-icon.svg';
import facebookIcon from '../../images/facebook-icon.svg';
import { useContext } from 'react';
import { PopupContext } from '../../contexts/PopupContext';

const Footer = () => {
  const { isPopupOpen } = useContext(PopupContext);
  return (
    <footer className={isPopupOpen ? 'footer footer_effect_blur' : 'footer'}>
      <p className='footer__copyright'>
        &copy; {new Date().getFullYear()} Supersite, Powered by News API
      </p>

      <nav className='footer__navbar'>
        <div className='footer__nav-links'>
          <Link to='/' className='footer__nav-link'>
            Home
          </Link>

          <a href='https://practicum.yandex.com' className='footer__nav-link'>
            Practicum by Yandex
          </a>
        </div>
        <div className='footer__nav-icons'>
          <a href='https://github.com'>
            <img
              src={githubIcon}
              className='footer__nav-icon'
              alt='GitHub icon'
            ></img>
          </a>

          <a href='https://facebook.com'>
            <img
              src={facebookIcon}
              className='footer__nav-icon'
              alt='Facebook icon'
            ></img>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
