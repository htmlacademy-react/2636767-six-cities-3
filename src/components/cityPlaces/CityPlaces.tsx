import Sorting from '../sorting/Sorting';
import { cards } from '../../mockData';
import PlaceCard from '../placeCard/PlaceCard';

interface CityPlacesProps {
  offersCount: number;
}

function CityPlaces({ offersCount }: CityPlacesProps) {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offersCount} places to stay in Amsterdam
        </b>
        <Sorting />
        <div className="cities__places-list places__list tabs__content">
          {cards.map((card) => (
            <PlaceCard key={card.id} placeCard={card} />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map"></section>
      </div>
    </div>
  );
}

export default CityPlaces;
