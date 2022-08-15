import './Card.css';

const Card = (props) => {
  return (
    <li className='card'>
      {props.isSaved && <span className='card__category'>{props.category}</span>}

      <button
        type='button'
        name={`${props.isSaved ? 'delete-button' : 'save-button'} `}
        title={`${props.isSaved ? 'Delete' : 'Save'}`}
        className={`card__button ${
          props.isSaved ? 'card__delete-button' : 'card__save-button'
        }`}
      >
        <span className='card__tooltip'>{`${
          props.isSaved ? 'Remove from saved' : 'Sign in to save articles'
        }`}</span>
      </button>

      <img src={props.image} className='card__image' alt='Image' />

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
