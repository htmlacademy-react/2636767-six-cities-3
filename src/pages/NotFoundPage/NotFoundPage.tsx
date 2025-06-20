import { Link } from 'react-router-dom';
import './NotFoundPage.css';
import { AppRoute } from '../../const';

function NotFoundPage() {
  return (
    <div className='not-found-page--container'>
      <div className='not-found-page--404'>404</div>
      <div className='not-found-page--title'>Page not found</div>
      <Link className='link-to-main' to={AppRoute.Main}>
        Go to main page
      </Link>
    </div>
  );
}

export default NotFoundPage;
