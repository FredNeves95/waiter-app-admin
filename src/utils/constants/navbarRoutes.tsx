import { InternalPagesLinks, InternalPagesTitles } from '../types/internalPages';
import { HomeIcon } from '../../components/Icons/HomeIcon';
import { ReactNode } from 'react';
import { HistoryIcon } from '../../components/Icons/HistoryIcon';
import { MenuIcon } from '../../components/Icons/MenuIcon';
import { UsersIcon } from '../../components/Icons/UsersIcon';
import { ProfileIcon } from '../../components/Icons/ProfileIcon';
import { LogoutIcon } from '../../components/Icons/LogoutIcon';
import { RestartIcon } from '../../components/Icons/Restarticon';


interface NavbarRoutes {
  link: InternalPagesLinks;
  title: InternalPagesTitles
  icon: ReactNode,
  description?: string
  action?: ReactNode
}

export const navbarRoutes: NavbarRoutes[] = [
  {
    link: '/home',
    title: 'Home',
    icon: <HomeIcon className='icon-class'/>,
    description: 'Acompanhe os pedidos dos clientes',
    action: <>
      <RestartIcon className='action-icon'/>
      Reiniciar o dia
    </>
  },
  {
    link: '/history',
    title: 'Histórico',
    icon: <HistoryIcon className='icon-class'/>,
    description: 'Visualize pedidos anteriores'
  },
  {
    link: '/menu',
    title: 'Cardápio',
    icon: <MenuIcon className='icon-class'/>,
    description: 'Gerencie os produtos do seu estabelecimento'
  },
  {
    link: '/users',
    title: 'Usuários',
    icon: <UsersIcon className='icon-class'/>,
    description: 'Cadastre e gerencie seus usuários',
  },
  {
    link: '/profile',
    title: 'Meu Perfil',
    icon: <ProfileIcon className='icon-class'/>,
    description: 'Gerencie o seu perfil'
  },
  {
    link: '/logout',
    title: 'Sair',
    icon: <LogoutIcon className='icon-class'/>
  },
];
