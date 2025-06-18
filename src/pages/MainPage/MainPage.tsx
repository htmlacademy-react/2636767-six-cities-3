import { useParams } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';
import { mockOffersList } from '../../mockData';
import { useEffect, useState } from 'react';
import { TOffer } from '../../types';
import CityPlaces from '../../components/cityPlaces/CityPlaces';
import NoPlaces from '../../components/noPlaces/NoPlaces';

function MainPage() {
  const { city } = useParams<{ city: string }>();

  const [offers, setOffers] = useState<TOffer[]>([]);

  useEffect(() => {
    const offersByCity = mockOffersList.filter(
      (offer) => offer.city.name.toLowerCase() === city,
    );

    setOffers(offersByCity);
  }, [city]);

  return (
    <main
      className={`page__main page__main--index ${
        !offers.length ? 'page__main--index-empty' : ''
      }`}
    >
      <h1 className='visually-hidden'>Cities</h1>
      <Navigation />
      <div className='cities'>
        <div
          className={`cities__places-container container ${
            !offers.length ? 'cities__places-container--empty' : ''
          }`}
        >
          {offers.length ? <CityPlaces offers={offers} /> : <NoPlaces />}
          <div className='cities__right-section'>
            {offers.length && <section className='cities__map map' />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
