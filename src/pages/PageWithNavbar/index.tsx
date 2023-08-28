import { ReactNode } from 'react';
import { Navbar } from '../../components/Navbar';
import * as S from './styles';
import { Header } from '../../components/Header';

interface PageWithNavbarProps {
  children?: ReactNode;
}

export const PageWithNavbar = ({ children }: PageWithNavbarProps) => {
  return (
    <S.Container>
      <Navbar/>
      <S.PageContainer>
        <Header/>
        {children}
      </S.PageContainer>
    </S.Container>
  );
};
