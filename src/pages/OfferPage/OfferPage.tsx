import RewiewForm from '../../components/rewiewForm/RewiewForm';
import { AuthorizationStatus } from '../../const';
import { mockOffersList } from '../../mockData/offers';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { mockOfferParis } from '../../mockData/offer';
import FavButton from '../../components/favButton/FavButton';
import { mockReviews } from '../../mockData/reviews';
import ReviewsList from '../../components/reviewsList/ReviewsList';
import OfferHost from '../../components/offerHost/OfferHost';
import { nearOffers } from '../../mockData/nearOffers';
import PlaceCard from '../../components/placeCard/PlaceCard';
import Map from '../../components/map/Map';
import { useState } from 'react';

interface OfferPageProps {
  authStatus: AuthorizationStatus;
}

function OfferPage({ authStatus }: OfferPageProps) {
  const currentOfferFromList = mockOffersList.find((offer) => offer.id === mockOfferParis.id);
  const nearOffersWithCurrent = [...nearOffers, currentOfferFromList];

  const [activeHoverId, setActiveHoverId] = useState<string | null>(mockOfferParis.id);

  const handleActiveHover = (id: string | null) => {
    setActiveHoverId(id);
  };

  if (!currentOfferFromList) {
    return <NotFoundPage />;
  }

  return (
    <main className='page__main page__main--offer'>
      <section className='offer'>
        <div className='offer__gallery-container container'>
          <div className='offer__gallery'>
            {mockOfferParis.images.map((image) => (
              <div key={image} className='offer__image-wrapper'>
                <img className='offer__image' src={image} alt='Photo studio' />
              </div>
            ))}
          </div>
        </div>
        <div className='offer__container container'>
          <div className='offer__wrapper'>
            {mockOfferParis.isPremium && (
              <div className='offer__mark'>
                <span>Premium</span>
              </div>
            )}
            <div className='offer__name-wrapper'>
              <h1 className='offer__name'>{mockOfferParis.title}</h1>
              <FavButton blockName='offer' isFav={mockOfferParis.isFavorite} />
            </div>
            <div className='offer__rating rating'>
              <div className='offer__stars rating__stars'>
                <span style={{ width: '80%' }}></span>
                <span className='visually-hidden'>Rating</span>
              </div>
              <span className='offer__rating-value rating__value'>{mockOfferParis.rating}</span>
            </div>
            <ul className='offer__features'>
              <li className='offer__feature offer__feature--entire'>{mockOfferParis.type}</li>
              <li className='offer__feature offer__feature--bedrooms'>{mockOfferParis.bedrooms}</li>
              <li className='offer__feature offer__feature--adults'>
                Max {mockOfferParis.maxAdults} adults
              </li>
            </ul>
            <div className='offer__price'>
              <b className='offer__price-value'>&euro;{mockOfferParis.price}</b>
              <span className='offer__price-text'>&nbsp;night</span>
            </div>
            <div className='offer__inside'>
              <h2 className='offer__inside-title'>What&apos;s inside</h2>
              <ul className='offer__inside-list'>
                {mockOfferParis.goods.map((good) => (
                  <li key={good} className='offer__inside-item'>
                    {good}
                  </li>
                ))}
              </ul>
            </div>
            <OfferHost offerSettings={mockOfferParis} />
            <section className='offer__reviews reviews'>
              <h2 className='reviews__title'>
                Reviews &middot; <span className='reviews__amount'>{mockReviews.length}</span>
              </h2>
              <ReviewsList />
              {authStatus === AuthorizationStatus.Auth && <RewiewForm />}
            </section>
          </div>
        </div>
        <Map
          activeOfferId={activeHoverId}
          blockName='offer'
          city={mockOfferParis.city}
          offers={nearOffersWithCurrent}
        />
      </section>
      <div className='container'>
        <section className='near-places places'>
          <h2 className='near-places__title'>Other places in the neighbourhood</h2>
          <div className='near-places__list places__list'>
            {nearOffers.map((nearOffer) => (
              <PlaceCard
                key={nearOffer.id}
                blockName='near-places'
                offer={nearOffer}
                handleActiveHover={handleActiveHover}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default OfferPage;
