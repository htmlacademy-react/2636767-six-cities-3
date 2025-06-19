import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoginPage from '../../pages/LoginPage/LoginPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import OfferPage from '../../pages/OfferPage/OfferPage';
import PrivateRoute from '../privateRoute/PrivateRoute';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import Layout from '../layout/Layout';
import { getGroupedFavList } from '../../pages/FavoritesPage/utils';
import { favOffersList } from '../../mockData';
import { TFavList } from '../../types';

function App() {
  const groupedFavByCity: TFavList[] = getGroupedFavList(favOffersList);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Layout authStatus={AuthorizationStatus.Auth} groupedFavList={groupedFavByCity} />
          }
        >
          <Route index element={<Navigate to='/paris' replace />} />
          <Route path=':city' element={<MainPage />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authStatus={AuthorizationStatus.Auth}>
                <FavoritesPage groupedFavList={groupedFavByCity} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage authStatus={AuthorizationStatus.Auth} />}
          />
          <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
