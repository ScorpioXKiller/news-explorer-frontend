import './SavedNewsHeader.css';

const SavedNewsHeader = () => {
  return (
    <section className='saved-news-header'>
      <h2 className='saved-news-header__title'>Saved articles</h2>
      <p className='saved-news-header__paragraph'>
        Elise, you have 5 saved articles
      </p>
      <p className='saved-news-header__keywords-list'>
        By keywords:{' '}
        <span className='saved-news-header__keywords'>
          Nature, Yellowstone, and 2 other
        </span>
      </p>
    </section>
  );
};

export default SavedNewsHeader;
