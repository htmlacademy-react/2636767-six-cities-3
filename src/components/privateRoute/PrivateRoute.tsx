import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

interface PrivateRouteProps {
  authStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute({authStatus, children }: PrivateRouteProps) {
  return authStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
