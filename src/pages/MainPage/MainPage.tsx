import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import PlaceCard from '../../components/placeCard/PlaceCard';
import Sorting from '../../components/sorting/Sorting';
import { cards } from '../../mockData';

interface MainPageProps {
  logged: boolean;
  offersCount: number;
}

function MainPage({ logged, offersCount }: MainPageProps) {
  return (
    <div className="page page--gray page--main">
      <Header active logged={logged} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Navigation />
        <div className="cities">
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
        </div>
      </main>
    </div>
  );
}

export default MainPage;
