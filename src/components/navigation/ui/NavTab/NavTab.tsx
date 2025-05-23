import { TNavItem } from '../../../../types';

interface NavTabProps {
  city: TNavItem;
}

function NavTab({ city }: NavTabProps) {
  return (
    <li className="locations__item">
      <a className={`locations__item-link ${ city.active ? 'tabs__item--active' : ''} tabs__item`} href="#">
        <span>{city.name}</span>
      </a>
    </li>
  );
}

export default NavTab;
