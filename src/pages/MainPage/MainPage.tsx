import { useParams } from 'react-router-dom';

import Navigation from '../../components/navigation/Navigation';
import CityPlaces from '../../components/cityPlaces/CityPlaces';
import NoPlaces from '../../components/noPlaces/NoPlaces';
import { mockOffersList } from '../../mockData/offers';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { useState } from 'react';
import Map from '../../components/map/Map';

function MainPage() {
  const { city } = useParams<{ city: string }>();

  const offers = mockOffersList.filter((offer) => offer.city.name.toLowerCase() === city);

  const [activeHoverOfferId, setActiveHoverOfferId] = useState<string | null>(null);

  const handleActiveHover = (id: string | null) => {
    setActiveHoverOfferId(id);
  }

 if (!offers[0]?.city) {
  return <NotFoundPage />
 }

  return (
    <main
      className={`page__main page__main--index ${!offers.length ? 'page__main--index-empty' : ''}`}
    >
      <h1 className='visually-hidden'>Cities</h1>
      <Navigation />
      <div className='cities'>
        <div
          className={`cities__places-container container ${
            !offers.length ? 'cities__places-container--empty' : ''
          }`}
        >
          {offers.length ? <CityPlaces offers={offers} handleActiveHover={handleActiveHover} /> : <NoPlaces />}
          <div className='cities__right-section'>
            {offers.length && <Map activeOfferId={activeHoverOfferId} city={offers[0].city} offers={offers}/>}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
