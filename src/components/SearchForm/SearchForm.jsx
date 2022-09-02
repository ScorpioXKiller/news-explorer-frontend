import useFormValidation from '../../hooks/useFormValidation';
import Button from '../Button/Button';
import './SearchForm.css';

const SearchForm = (props) => {
  const { inputs, handleChange } = useFormValidation();

  return (
    <section className='search-form__container'>
      <h1 className={'search-form__title'}>What's going on in the world?</h1>

      <h2 className='search-form__subtitle'>
        Find the latest news on any topic and save them in your personal
        account.
      </h2>

      <form className='search-form'>
        <label htmlFor='search' className='search-form__field'>
          <input
            type='search'
            className={
              props.isSearchFieldEmpty
                ? 'search-form__input search-form__input_placeholder_red'
                : 'search-form__input'
            }
            id='search-input'
            name='search'
            placeholder={
              !props.isSearchFieldEmpty
                ? 'Enter topic'
                : 'Please enter the keywords'
            }
            required
            value={inputs.search || ''}
            onChange={handleChange}
          ></input>
        </label>

        <Button
          className='search-form__submit-button'
          type='submit'
          title='Search'
          onClick={(event) =>
            props.onSearchButtonClick(event, inputs.search || '')
          }
        >
          Search
        </Button>
      </form>
    </section>
  );
};

export default SearchForm;
