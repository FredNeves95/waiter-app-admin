import { css, styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  height: 100vh;
  width: 108px;
  background-color: ${(props) => props.theme.colors.gray[0]};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavbarTitle = styled.h5`
  color: ${(props) => props.theme.colors.gray[400]};
  margin: 50% 0;

  strong{
    font-size: 20px;
    font-weight: 600;
  }

  small {
    font-size: 20px;
    font-weight: 300;
  }
`;

export const NavbarList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: start;
  gap: 64px;
`;

export const NavbarListItem = styled.li<{isbreakpoint: 'true' | 'false'}>`
  ${(props) => {
    return props.isbreakpoint === 'true' ?
      css`
    margin-top: 100px;
    `
      : null;
  }
}
`;

export const NavbarLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.gray[400]};
  font-size: 14px;
  gap: 8px;
  transition: all 0.1s linear;

  &:hover{
    color: ${(props) => props.theme.colors.red.light};
  }
  .icon-class {
    width: 20px;
    height: 18px;
  }
`;
