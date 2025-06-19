import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/Header';
import { useEffect, useState } from 'react';
import { AppRoute, AuthorizationStatus } from '../../const';
import { TFavList } from '../../types';

interface LayoutProps {
  authStatus: AuthorizationStatus;
  groupedFavList: TFavList[]
}

function Layout({ authStatus, groupedFavList }: LayoutProps) {
  const { pathname } = useLocation();
  
  const [rootClassName, setRootClassname] = useState<string>('');
  const [linkClassName, setLinkClassName] = useState('');
  const [shouldRenderUser, setShouldRenderUser] = useState(true);

  useEffect(() => {
    if (pathname === AppRoute.Main) {
      setRootClassname('page--gray page--main');
      setLinkClassName('header__logo-link--active');
    } else if (pathname === AppRoute.Login) {
      setRootClassname('page--gray page--login');
      setShouldRenderUser(false);
    } else if (!groupedFavList.length) {
      setRootClassname('page--favorites-empty')
    }
  }, []);

  return (
    <div className={`page ${rootClassName}`}>
      <Header
        linkClassName={linkClassName}
        authStatus={authStatus}
        shouldRenderUser={shouldRenderUser}
      />
      <Outlet />
    </div>
  );
}

export default Layout;
