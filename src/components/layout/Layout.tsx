import { Outlet } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import Header from '../header/Header';

interface LayoutProps {
  logged: boolean;
}

function Layout({ logged }: LayoutProps) {
  return (
    <div className="page page--gray page--main">
      <Header active logged={logged} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Navigation />
        <div className="cities">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
