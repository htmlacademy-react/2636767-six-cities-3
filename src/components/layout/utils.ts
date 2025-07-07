import { AppRoute, cities } from '../../const';
import { TFavList } from '../../types';

export const getLayoutOptions = (pathName: AppRoute, favList: TFavList[]) => {
  let rootClassName = '';
  let linkClassName = '';
  let shouldRenderUser = true;

  const isCityUrl = cities.some((city) => pathName.includes(city.url));

  if (isCityUrl) {
    rootClassName = 'page--gray page--main';
    linkClassName = 'header__logo-link--active';
  } else if (pathName === AppRoute.Login) {
    rootClassName = 'page--gray page--login';
    shouldRenderUser = false;
  } else if (pathName === AppRoute.Favorites && !favList.length) {
    rootClassName = 'page--favorites-empty';
  }

  return { linkClassName, rootClassName, shouldRenderUser };
};
