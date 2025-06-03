import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import { AppRoute } from '../../const';
import LoginPage from '../../pages/LoginPage/LoginPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import OfferPage from '../../pages/OfferPage/OfferPage';
import PrivateRoute from '../privateRoute/PrivateRoute';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

interface Props {
  offersCount: number;
}

function App({ offersCount }: Props) {
  const logged = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offersCount={offersCount} logged={logged} />}
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute logged={logged}>
              <FavoritesPage logged={logged} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferPage logged={logged} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
