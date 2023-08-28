import { useContext } from 'react';
import { ActivePageContext, ActivePageContextProps } from '../../contexts/ActivePageContext';
import { navbarRoutes } from '../../utils/constants/navbarRoutes';

import * as S from './style';
import { Button } from '../Button';

export const Header = () => {
  const { activePage } = useContext(ActivePageContext) as ActivePageContextProps;
  const data = navbarRoutes.find(route => route.link === activePage);
  return(
    <S.Container>
      <S.TextContainer>
        <S.Title>
          {data?.icon}
          <h4>{data?.title}</h4>
        </S.Title>
        { data?.description && <p>{data?.description}</p>}
      </S.TextContainer>
      {data?.action && <Button buttonType='secondary'>
        {data.action}
      </Button>}
    </S.Container>
  );
};
