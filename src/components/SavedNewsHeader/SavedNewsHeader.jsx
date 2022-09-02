import { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './SavedNewsHeader.css';

const SavedNewsHeader = ({ savedArticles }) => {
  const currentUser = useContext(CurrentUserContext);

  const getKeyword = savedArticles.map((article) => ' ' + article.keyword);

  const keywordsList = [...new Set(getKeyword)];

  const showArticlesAmount = `you have ${savedArticles.length} ${
    savedArticles.length > 1 ? 'saved articles' : 'saved article'
  }`;

  const setTitle =
    savedArticles.length !== 0
      ? showArticlesAmount
      : "you don't have saved articles here yet!";

  return (
    <section className='saved-news-header'>
      <h2 className='saved-news-header__title'>Saved articles</h2>
      <p className='saved-news-header__paragraph'>
        {`${currentUser.name}, ${setTitle}`}
      </p>
      {savedArticles.length !== 0 && (
        <p className='saved-news-header__keywords-list'>
          By keywords:{' '}
          <span className='saved-news-header__keywords'>{`${
            keywordsList.length > 3
              ? `${keywordsList.slice(0, 2)} and ${
                  keywordsList.length - 2
                } other`
              : `${keywordsList.slice(0, 3)}`
          }`}</span>
        </p>
      )}
    </section>
  );
};

export default SavedNewsHeader;
