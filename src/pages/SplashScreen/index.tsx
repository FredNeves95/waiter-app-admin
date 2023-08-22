import * as S from './styles';
import logo from '../../assets/images/logo.svg';
export const SplashScreen = () => {
  return(
    <S.Container>
      <img src={logo} alt='Waiter app logo'/>
    </S.Container>
  );
};
