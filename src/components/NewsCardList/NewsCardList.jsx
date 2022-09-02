import './NewsCardList.css';
import Card from '../Card/Card';
import { useState } from 'react';
import Button from '../Button/Button';

const NewsCardList = ({ articles, isLoggedIn, onCardClickButton }) => {
  const [limit, setLimit] = useState(3);

  const MAX_LIMIT = 100;

  const showMoreCards = () => {
    setLimit((prevValue) => prevValue + 3);
  };

  return (
    <section className='news-card-list'>
      <h2 className='news-card-list__title'>Search results</h2>
      <ul className='news-card-list__container'>
        {articles.slice(0, limit).map((article, index) => (
          <Card
            key={index * Math.random()}
            card={article}
            isLoggedIn={isLoggedIn}
            onCardClickButton={onCardClickButton}
          />
        ))}
      </ul>

      {limit <= MAX_LIMIT && (
        <Button
          className='news-card-list__button'
          type='button'
          title='Show more'
          onClick={showMoreCards}
        >
          Show more
        </Button>
      )}
    </section>
  );
};

export default NewsCardList;
