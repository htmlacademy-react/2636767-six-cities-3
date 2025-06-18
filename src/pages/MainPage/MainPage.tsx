import { useParams } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';
import PlaceCard from '../../components/placeCard/PlaceCard';
import Sorting from '../../components/sorting/Sorting';
import { mockOffersList } from '../../mockData';
import { useEffect, useState } from 'react';
import { TOffer } from '../../types';

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
    <main className='page__main page__main--index'>
      <h1 className='visually-hidden'>Cities</h1>
      <Navigation />
      <div className='cities'>
        <div className='cities__places-container container'>
          <section className='cities__places places'>
            <h2 className='visually-hidden'>Places</h2>
            <b className='places__found'>
              {offers.length} places to stay in {offers[0]?.city.name}
            </b>
            <Sorting />
            <div className='cities__places-list places__list tabs__content'>
              {offers.map((offer) => (
                <PlaceCard key={offer.id} offer={offer} />
              ))}
            </div>
          </section>
          <div className='cities__right-section'>
            <section className='cities__map map'></section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
