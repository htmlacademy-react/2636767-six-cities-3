import Footer from '../../components/footer/Footer';
import { TFavList } from '../../types';
import FavByCity from '../../components/favByCity/FavByCity';

interface FavoritesPageProps {
  groupedFavList: TFavList[];
}

function FavoritesPage({ groupedFavList }: FavoritesPageProps) {
  const renderFavorites = () => {
    if (!groupedFavList.length) {
      return (
        <section className='favorites favorites--empty'>
          <h1 className='visually-hidden'>Favorites (empty)</h1>
          <div className='favorites__status-wrapper'>
            <b className='favorites__status'>Nothing yet saved.</b>
            <p className='favorites__status-description'>
              Save properties to narrow down search or plan your future trips.
            </p>
          </div>
        </section>
      );
    }

    return (
      <section className='favorites'>
        <h1 className='favorites__title'>Saved listing</h1>
        <ul className='favorites__list'>
          {groupedFavList.map((group) => (
            <FavByCity key={group.city} group={group} />
          ))}
        </ul>
      </section>
    );
  };

  return (
    <>
      <main
        className={`page__main page__main--favorites ${
          !groupedFavList.length ? 'page__main--favorites-empty' : ''
        }`}
      >
        <div className='page__favorites-container container'>
          {renderFavorites()}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default FavoritesPage;
