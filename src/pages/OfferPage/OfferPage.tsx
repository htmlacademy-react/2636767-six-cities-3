import { useParams } from 'react-router-dom';
import RewiewForm from '../../components/rewiewForm/RewiewForm';
import { AuthorizationStatus } from '../../const';
import { mockOffersList } from '../../mockData/offers';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { mockOfferParis } from '../../mockData/offer';
import FavButton from '../../components/favButton/FavButton';
import { mockReviews } from '../../mockData/reviews';
import ReviewsList from '../../components/reviewsList/ReviewsList';

interface OfferPageProps {
  authStatus: AuthorizationStatus;
}

function OfferPage({ authStatus }: OfferPageProps) {
  const { id } = useParams();

  const currentOffer = mockOffersList.find((mockOffer) => mockOffer.id === id);

  if (!currentOffer) {
    return <NotFoundPage />;
  }

  return (
    <main className='page__main page__main--offer'>
      <section className='offer'>
        <div className='offer__gallery-container container'>
          <div className='offer__gallery'>
            {mockOfferParis.images.map((image) => (
              <div className='offer__image-wrapper'>
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
                  <li className='offer__inside-item'>{good}</li>
                ))}
              </ul>
            </div>
            <div className='offer__host'>
              <h2 className='offer__host-title'>Meet the host</h2>
              <div className='offer__host-user user'>
                <div className='offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper'>
                  <img
                    className='offer__avatar user__avatar'
                    src={mockOfferParis.host.avatarUrl}
                    width='74'
                    height='74'
                    alt='Host avatar'
                  />
                </div>
                <span className='offer__user-name'>{mockOfferParis.host.name}</span>
                {mockOfferParis.host.isPro && <span className='offer__user-status'>Pro</span>}
              </div>
              <div className='offer__description'>
                <p className='offer__text'>{mockOfferParis.description}</p>
              </div>
            </div>
            <section className='offer__reviews reviews'>
              <h2 className='reviews__title'>
                Reviews &middot; <span className='reviews__amount'>{mockReviews.length}</span>
              </h2>
              <ReviewsList />
              {authStatus === AuthorizationStatus.Auth && <RewiewForm />}
            </section>
          </div>
        </div>
        <section className='offer__map map'></section>
      </section>
      <div className='container'>
        <section className='near-places places'>
          <h2 className='near-places__title'>Other places in the neighbourhood</h2>
          <div className='near-places__list places__list'>
            <article className='near-places__card place-card'>
              <div className='near-places__image-wrapper place-card__image-wrapper'>
                <a href='#'>
                  <img
                    className='place-card__image'
                    src='img/room.jpg'
                    width='260'
                    height='200'
                    alt='Place image'
                  />
                </a>
              </div>
              <div className='place-card__info'>
                <div className='place-card__price-wrapper'>
                  <div className='place-card__price'>
                    <b className='place-card__price-value'>&euro;80</b>
                    <span className='place-card__price-text'>&#47;&nbsp;night</span>
                  </div>
                  <button
                    className='place-card__bookmark-button place-card__bookmark-button--active button'
                    type='button'
                  >
                    <svg className='place-card__bookmark-icon' width='18' height='19'>
                      <use xlinkHref='#icon-bookmark'></use>
                    </svg>
                    <span className='visually-hidden'>In bookmarks</span>
                  </button>
                </div>
                <div className='place-card__rating rating'>
                  <div className='place-card__stars rating__stars'>
                    <span style={{ width: '80%' }}></span>
                    <span className='visually-hidden'>Rating</span>
                  </div>
                </div>
                <h2 className='place-card__name'>
                  <a href='#'>Wood and stone place</a>
                </h2>
                <p className='place-card__type'>Room</p>
              </div>
            </article>

            <article className='near-places__card place-card'>
              <div className='near-places__image-wrapper place-card__image-wrapper'>
                <a href='#'>
                  <img
                    className='place-card__image'
                    src='img/apartment-02.jpg'
                    width='260'
                    height='200'
                    alt='Place image'
                  />
                </a>
              </div>
              <div className='place-card__info'>
                <div className='place-card__price-wrapper'>
                  <div className='place-card__price'>
                    <b className='place-card__price-value'>&euro;132</b>
                    <span className='place-card__price-text'>&#47;&nbsp;night</span>
                  </div>
                  <button className='place-card__bookmark-button button' type='button'>
                    <svg className='place-card__bookmark-icon' width='18' height='19'>
                      <use xlinkHref='#icon-bookmark'></use>
                    </svg>
                    <span className='visually-hidden'>To bookmarks</span>
                  </button>
                </div>
                <div className='place-card__rating rating'>
                  <div className='place-card__stars rating__stars'>
                    <span style={{ width: '80%' }}></span>
                    <span className='visually-hidden'>Rating</span>
                  </div>
                </div>
                <h2 className='place-card__name'>
                  <a href='#'>Canal View Prinsengracht</a>
                </h2>
                <p className='place-card__type'>Apartment</p>
              </div>
            </article>

            <article className='near-places__card place-card'>
              <div className='place-card__mark'>
                <span>Premium</span>
              </div>
              <div className='near-places__image-wrapper place-card__image-wrapper'>
                <a href='#'>
                  <img
                    className='place-card__image'
                    src='img/apartment-03.jpg'
                    width='260'
                    height='200'
                    alt='Place image'
                  />
                </a>
              </div>
              <div className='place-card__info'>
                <div className='place-card__price-wrapper'>
                  <div className='place-card__price'>
                    <b className='place-card__price-value'>&euro;180</b>
                    <span className='place-card__price-text'>&#47;&nbsp;night</span>
                  </div>
                  <button className='place-card__bookmark-button button' type='button'>
                    <svg className='place-card__bookmark-icon' width='18' height='19'>
                      <use xlinkHref='#icon-bookmark'></use>
                    </svg>
                    <span className='visually-hidden'>To bookmarks</span>
                  </button>
                </div>
                <div className='place-card__rating rating'>
                  <div className='place-card__stars rating__stars'>
                    <span style={{ width: '100%' }}></span>
                    <span className='visually-hidden'>Rating</span>
                  </div>
                </div>
                <h2 className='place-card__name'>
                  <a href='#'>Nice, cozy, warm big bed apartment</a>
                </h2>
                <p className='place-card__type'>Apartment</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

export default OfferPage;
