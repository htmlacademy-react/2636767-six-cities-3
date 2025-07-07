import { TOffer } from '../../types';
import { NavLink } from 'react-router-dom';
import FavButton from '../favButton/FavButton';

interface PlaceCardProps {
  offer: TOffer;
  handleActiveHover: (id: string | null) => void;
}

function PlaceCard({ handleActiveHover, offer }: PlaceCardProps) {
  const offerLink = `/${offer.city.name.toLocaleLowerCase()}/offer/${offer.id}`;

  return (
    <NavLink to={offerLink}>
      <article
        className='cities__card place-card'
        onMouseEnter={() => handleActiveHover(offer.id)}
        onMouseLeave={() => handleActiveHover(null)}
      >
        {offer.isPremium && (
          <div className='place-card__mark'>
            <span>Premium</span>
          </div>
        )}
        <div className='cities__image-wrapper place-card__image-wrapper'>
          <a href='#'>
            <img
              className='place-card__image'
              src={offer.previewImage}
              width='260'
              height='200'
              alt='Place image'
            />
          </a>
        </div>
        <div className='place-card__info'>
          <div className='place-card__price-wrapper'>
            <div className='place-card__price'>
              <b className='place-card__price-value'>&euro;{offer.price} </b>
              <span className='place-card__price-text'>&#47;&nbsp;night</span>
            </div>
            <FavButton blockName='place-card' isFav={offer.isFavorite} />
          </div>
          <div className='place-card__rating rating'>
            <div className='place-card__stars rating__stars'>
              <span style={{ width: '80%' }}></span>
              <span className='visually-hidden'>Rating</span>
            </div>
          </div>
          <h2 className='place-card__name'>{offer.title}</h2>
          <p className='place-card__type'>{offer.type}</p>
        </div>
      </article>
    </NavLink>
  );
}

export default PlaceCard;
