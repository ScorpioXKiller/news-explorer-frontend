import './NotFound.css';
import notFoundIcon from '../../images/not-found-icon.svg';

const NotFound = () => {
  return (
    <section className='not-found'>
      <img src={notFoundIcon} className='not-found__icon' alt='Not Found' />

      <h2 className='not-found__title'>Nothing Found</h2>

      <span className='not-found__info'>
        Sorry, but nothing matched your search terms.
      </span>
    </section>
  );
};

export default NotFound;
