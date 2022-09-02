import './Card.css';
import notFoundImage from '../../images/image-not-found.jpg';

const Card = ({ card, isSaved, isLoggedIn, onCardClickButton }) => {
  const article = {
    keyword: card.keyword,
    date: isSaved ? card.date : card.publishedAt,
    image: isSaved ? card.image : card?.urlToImage,
    title: card.title,
    content: isSaved ? card.text : card.content,
    author: isSaved ? card.source : card.author,
    link: isSaved ? card.link : card.url,
  };

  const setCardStyle = card.marked
    ? 'card__save-button card__save-button_marked'
    : 'card__save-button';

  const setTooltipText =
    isSaved || card.marked ? 'Remove from saved' : 'Save article';

  const getFormattedDate = new Date(article.date).toLocaleString('en-EN', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const handleClick = () => {
    onCardClickButton(card);
  };

  return (
    <li className='card'>
      {isSaved && <span className='card__keyword'>{article.keyword}</span>}

      <button
        type='button'
        name={`${isSaved ? 'delete-button' : 'save-button'} `}
        title={`${isSaved ? 'Delete' : 'Save'}`}
        className={`card__button ${
          isSaved ? 'card__delete-button' : setCardStyle
        }`}
        onClick={handleClick}
      >
        {
          <span className='card__tooltip'>{`${
            isLoggedIn ? setTooltipText : 'Sign in to save articles'
          }`}</span>
        }
      </button>

      <a href={article.link} target={'_blank'} rel='noreferrer'>
        <img
          src={article.image ?? notFoundImage}
          className='card__image'
          alt={article.title}
        />
      </a>

      <div className='card__context'>
        <p className='card__date'>{getFormattedDate}</p>
        <h3 className='card__title'>{article.title}</h3>
        <article className='card__description'>{article.content}</article>
        <p className='card__source'>{article.author}</p>
      </div>
    </li>
  );
};

export default Card;
