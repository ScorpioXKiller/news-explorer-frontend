import { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Card from '../Card/Card';
import './SavedNews.css';

const SavedNews = ({ savedArticles, isLoggedIn, onCardClickButton }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className='saved-news-list'>
      <ul className='news-card-list__container'>
        {savedArticles.map(
          (article) =>
            article.owner === currentUser._id && (
              <Card
                key={article._id}
                card={article}
                isLoggedIn={isLoggedIn}
                onCardClickButton={onCardClickButton}
                isSaved
              />
            )
        )}
      </ul>
    </section>
  );
};

export default SavedNews;
