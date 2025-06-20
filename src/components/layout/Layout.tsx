import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/Header';
import { AppRoute, AuthorizationStatus } from '../../const';
import { TFavList } from '../../types';
import { getLayoutOptions } from './utils';

interface LayoutProps {
  authStatus: AuthorizationStatus;
  groupedFavList: TFavList[];
}

function Layout({ authStatus, groupedFavList }: LayoutProps) {
  const { pathname } = useLocation();

  const { linkClassName, rootClassName, shouldRenderUser } = getLayoutOptions(
    pathname as AppRoute,
    groupedFavList,
  );

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
