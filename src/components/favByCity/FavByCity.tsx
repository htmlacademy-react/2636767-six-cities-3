import { TFavList } from '../../types';
import FavPlaceCard from './FavPlaceCard';

interface FavByCityProps {
  group: TFavList;
}

function FavByCity({ group }: FavByCityProps) {
  return (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <a className='locations__item-link' href='#'>
            <span>{group.city}</span>
          </a>
        </div>
      </div>
      <div className='favorites__places'>
        {group.offers.map((offer) => (
          <FavPlaceCard offer={offer} />
        ))}
      </div>
    </li>
  );
}

export default FavByCity;
