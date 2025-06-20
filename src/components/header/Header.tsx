import { AuthorizationStatus } from '../../const';
import HeaderLeft from './ui/HeaderLeft/HeaderLeft';
import HeaderRight from './ui/HeaderRight/HeaderRight';

interface HeaderProps {
  authStatus: AuthorizationStatus;
  linkClassName: string;
  shouldRenderUser: boolean;
}

function Header({authStatus, linkClassName, shouldRenderUser }: HeaderProps) {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <HeaderLeft linkClassName={linkClassName} />
          {shouldRenderUser && <HeaderRight authStatus={authStatus} />}
        </div>
      </div>
    </header>
  );
}

export default Header;
