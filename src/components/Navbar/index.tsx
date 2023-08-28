import { useContext } from 'react';
import * as S from './style';
import { ActivePageContext, ActivePageContextProps } from '../../contexts/ActivePageContext';
import { navbarRoutes } from '../../utils/constants/navbarRoutes';

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
