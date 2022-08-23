import './NewsCardList.css';
import { searchedCards } from '../../data/searchedCards';
import Card from '../Card/Card';
import { useState } from 'react';
import Button from '../Button/Button';

const NewsCardList = () => {
  const [limit, setLimit] = useState(3);

  const showMoreCards = () => {
    setLimit((prevValue) => prevValue + 3);
  };

  return (
    <section className='news-card-list'>
      <h2 className='news-card-list__title'>Search results</h2>
      <ul className='news-card-list__container'>
        {searchedCards.slice(0, limit).map((card) => (
          <Card
            key={card._id}
            date={card.date}
            image={card.image}
            title={card.title}
            article={card.article}
            source={card.source}
          />
        ))}
      </ul>

      <Button
        className='news-card-list__button'
        type='button'
        title='Show more'
        onClick={showMoreCards}
      >
        Show more
      </Button>
    </section>
  );
};

export default NewsCardList;
