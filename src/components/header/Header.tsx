import HeaderLeft from './ui/HeaderLeft/HeaderLeft';
import HeaderRight from './ui/HeaderRight/HeaderRight';

interface HeaderProps {
  active?: boolean;
  logged: boolean;
}

function Header({ active, logged }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLeft active={active} />
          <HeaderRight logged={logged} />
        </div>
      </div>
    </header>
  );
}

export default Header;
