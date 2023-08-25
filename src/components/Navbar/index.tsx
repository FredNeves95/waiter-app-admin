import { ReactNode } from 'react';
import { HomeIcon } from '../Icons/HomeIcon';
import * as S from './style';
import { HistoryIcon } from '../Icons/HistoryIcon';
import { MenuIcon } from '../Icons/MenuIcon';
import { UsersIcon } from '../Icons/UsersIcon';
import { ProfileIcon } from '../Icons/ProfileIcon';
import { LogoutIcon } from '../Icons/LogoutIcon';


// import homeIcon from '../../assets/images/home-icon.svg';
// import historyIcon from '../../assets/images/history-icon.svg';
// import menuIcon from '../../assets/images/menu-icon.svg';
// import usersIcon from '../../assets/images/users-icon.svg';
// import profileIcon from '../../assets/images/profile-icon.svg';
// import logoutIcon from '../../assets/images/logout-icon.svg';


interface NavbarRoutes {
  link: '/home' | '/history' | '/menu' | '/users' | '/profile' | '/logout';
  title: 'Home' | 'Histórico' | 'Cardápio' | 'Usuários' | 'Meu Perfil' | 'Sair';
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
  return (
    <aside>
      <S.NavbarContainer>
        <S.NavbarTitle>
          <strong>W</strong><small>A</small>
        </S.NavbarTitle>
        <S.NavbarList>
          {
            navbarRoutes.map(route => (
              <S.NavbarListItem key={route.link} isbreakpoint={route.link === '/profile' ? 'true' : 'false'}>
                <S.NavbarLink to={route.link}>
                  {route.icon}
                  {route.title}
                </S.NavbarLink>
              </S.NavbarListItem>
            ))
          }
        </S.NavbarList>
      </S.NavbarContainer>
    </aside>
  );
};
