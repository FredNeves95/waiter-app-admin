import { ReactNode, useContext } from 'react';
import { HomeIcon } from '../Icons/HomeIcon';
import * as S from './style';
import { HistoryIcon } from '../Icons/HistoryIcon';
import { MenuIcon } from '../Icons/MenuIcon';
import { UsersIcon } from '../Icons/UsersIcon';
import { ProfileIcon } from '../Icons/ProfileIcon';
import { LogoutIcon } from '../Icons/LogoutIcon';
import { InternalPagesLinks, InternalPagesTitles } from '../../utils/types/internalPages';
import { ActivePageContext, ActivePageContextProps } from '../../contexts/ActivePageContext';

interface NavbarRoutes {
  link: InternalPagesLinks;
  title: InternalPagesTitles
  icon: ReactNode
}

const navbarRoutes: NavbarRoutes[] = [
  {
    link: '/home',
    title: 'Home',
    icon: <HomeIcon className='icon-class'/>
  },
  {
    link: '/history',
    title: 'Histórico',
    icon: <HistoryIcon className='icon-class'/>
  },
  {
    link: '/menu',
    title: 'Cardápio',
    icon: <MenuIcon className='icon-class'/>
  },
  {
    link: '/users',
    title: 'Usuários',
    icon: <UsersIcon className='icon-class'/>
  },
  {
    link: '/profile',
    title: 'Meu Perfil',
    icon: <ProfileIcon className='icon-class'/>
  },
  {
    link: '/logout',
    title: 'Sair',
    icon: <LogoutIcon className='icon-class'/>
  },
];

export const Navbar = () => {

  const { activePage, handleActivePage } = useContext(ActivePageContext) as ActivePageContextProps;

  return (
    <aside>
      <S.NavbarContainer>
        <S.NavbarTitle>
          <strong>W</strong><small>A</small>
        </S.NavbarTitle>
        <S.NavbarList>
          {
            navbarRoutes.map(route => (
              <S.NavbarListItem
                key={route.link}
                isbreakpoint={(route.link === '/profile').toString()}
              >
                <S.NavbarLink to={route.link} onClick={() => handleActivePage(route.link)} isactive={(activePage === route.link).toString()}>
                  {route.icon}
                  {route.title}
                  {
                    activePage === route.link && <hr/>
                  }
                </S.NavbarLink>
              </S.NavbarListItem>
            ))
          }
        </S.NavbarList>
      </S.NavbarContainer>
    </aside>
  );
};
