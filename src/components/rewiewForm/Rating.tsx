import { ChangeEvent } from 'react';
import { TRating } from '../../types';
import { RatingValue } from '../../const';

interface RatingProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  rate: TRating;
  rating: RatingValue | null;
}

function Rating({onChange, rate, rating }: RatingProps) {
  return (
    <>
      <input
        className='form__rating-input visually-hidden'
        name='rating'
        value={rate.value}
        id={`${rate.value}-stars`}
        type='radio'
        checked={rating === rate.value}
        onChange={onChange}
      />
      <label
        htmlFor={`${rate.value}-stars`}
        className='reviews__rating-label form__rating-label'
        title={rate.labelTitle}
      >
        <svg className='form__star-image' width='37' height='33'>
          <use xlinkHref='#icon-star' />
        </svg>
      </label>
    </>
  );
}

export default Rating;
