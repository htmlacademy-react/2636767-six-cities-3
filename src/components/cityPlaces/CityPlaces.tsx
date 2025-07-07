import Sorting from '../sorting/Sorting';
import PlaceCard from '../placeCard/PlaceCard';
import { TOffer } from '../../types';

interface CityPlacesProps {
  offers: TOffer[];
  handleActiveHover: (id: string | null) => void;
}

function CityPlaces({handleActiveHover, offers }: CityPlacesProps) {
  return (
    <section className='cities__places places'>
      <h2 className='visually-hidden'>Places</h2>
      <b className='places__found'>
        {offers.length} places to stay in {offers[0]?.city.name}
      </b>
      <Sorting />
      <div className='cities__places-list places__list tabs__content'>
        {offers.map((offer) => (
          <PlaceCard key={offer.id} handleActiveHover={handleActiveHover} offer={offer} />
        ))}
      </div>
    </section>
  );
}

export default CityPlaces;
