import { useState } from 'react';
import './Card.css';

const Card = (props) => {
  const [isMarked, setIsMarked] = useState(false);

  const setCardStyle = isMarked
    ? 'card__save-button card__save-button_marked'
    : 'card__save-button';

  return (
    <li className='card'>
      {props.isSaved && (
        <span className='card__category'>{props.category}</span>
      )}

      <button
        type='button'
        name={`${props.isSaved ? 'delete-button' : 'save-button'} `}
        title={`${props.isSaved ? 'Delete' : 'Save'}`}
        className={`card__button ${
          props.isSaved ? 'card__delete-button' : setCardStyle
        }`}
        onClick={() => setIsMarked(!isMarked)}
      >
        <span className='card__tooltip'>{`${
          props.isSaved ? 'Remove from saved' : 'Sign in to save articles'
        }`}</span>
      </button>

      <img src={props.image} className='card__image' alt={props.title} />

      <div className='card__context'>
        <p className='card__date'>{props.date}</p>
        <h3 className='card__title'>{props.title}</h3>
        <article className='card__description'>{props.article}</article>
        <p className='card__source'>{props.source}</p>
      </div>
    </li>
  );
};

export default Card;
