import { NavLink } from 'react-router-dom';
import { TNavItem } from '../../../../types';

interface NavTabProps {
  city: TNavItem;
}

function NavTab({ city }: NavTabProps) {
  return (
    <li className='locations__item'>
      <NavLink
        className={({ isActive }) =>
          `locations__item-link tabs__item ${
            isActive ? 'tabs__item--active' : ''
          }`
        }
        to={`/${city.url}`}
      >
        <span>{city.name}</span>
      </NavLink>
    </li>
  );
}

export default NavTab;

