import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';

interface PrivateRouteProps {
  logged: boolean;
  children: JSX.Element;
}

function PrivateRoute({ children, logged }: PrivateRouteProps) {
  return logged ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
