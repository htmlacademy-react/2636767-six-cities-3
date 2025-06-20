import { ChangeEvent, FormEvent, useState } from 'react';
import { ratingStars, RatingValue } from '../../const';
import Rating from './Rating';

function RewiewForm() {
  const [rating, setRating] = useState<RatingValue | null>(null);
  const [reviewText, setReviewText] = useState('');

  const onChangeRating = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setRating(null);
    setReviewText('');
  };

  return (
    <form className='reviews__form form' action='#' method='post' onSubmit={onSubmit}>
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>
      <div className='reviews__rating-form form__rating'>
        {ratingStars.map((rate) => (
          <Rating key={rate.value} onChange={onChangeRating} rate={rate} rating={rating} />
        ))}
      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        value={reviewText}
        onChange={onChangeText}
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set <span className='reviews__star'>rating</span> and
          describe your stay with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button
          className='reviews__submit form__submit button'
          type='submit'
          disabled={!rating || reviewText.length < 50}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default RewiewForm;
