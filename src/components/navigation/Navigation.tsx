import { cities } from '../../const';
import NavTab from './ui/NavTab/NavTab';

function Navigation() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <NavTab key={city.id} city={city} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Navigation;
