import { ReactNode } from 'react';
import { Navbar } from '../../components/Navbar';
import * as S from './styles';

interface PageWithNavbarProps {
  children?: ReactNode;
}

export const PageWithNavbar = ({children}: PageWithNavbarProps) => {
  return (
    <S.Container>
      <Navbar/>
      <S.PageContainer>
        <header>
          <>
            {/* <img src={homeIcon}/> */}
            <h4>Home</h4>
          </>
          <p>Acompanhe os pedidos dos clientes</p>
        </header>
        {children}
      </S.PageContainer>
    </S.Container>
  );
};
