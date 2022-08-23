import { savedCards } from '../../data/savedCards';
import Card from '../Card/Card';
import './SavedNews.css';

const SavedNews = () => {
  return (
    <section className='saved-news-list'>
      <ul className='news-card-list__container'>
        {savedCards.map((card) => (
          <Card
            key={card._id}
            date={card.date}
            image={card.image}
            category={card.category}
            title={card.title}
            article={card.article}
            source={card.source}
            isSaved={card.isSaved}
          />
        ))}
      </ul>
    </section>
  );
};

export default SavedNews;
