import { useContext } from 'react';
import { SavedArticlesButtonContext } from '../../contexts/SavedArticlesButtonContext';
import Button from '../Button/Button';
import './SearchForm.css';

const SearchForm = () => {
  const { isClicked } = useContext(SavedArticlesButtonContext);
  return (
    <section className='search-form__container'>
      <h1
        className={
          isClicked
            ? 'search-form__title search-form__title_theme_dark'
            : 'search-form__title'
        }
      >
        What's going on in the world?
      </h1>
      <h2 className='search-form__subtitle'>
        Find the latest news on any topic and save them in your personal
        account.
      </h2>

      <form className='search-form'>
        <label htmlFor='search' className='search-form__field'>
          <input
            type='search'
            className='search-form__input'
            id='search-input'
            name='search'
            placeholder='Enter topic'
          ></input>
        </label>

        <Button
          className='search-form__submit-button'
          type='submit'
          title='Search'
        >
          Search
        </Button>
      </form>
    </section>
  );
};

export default SearchForm;
