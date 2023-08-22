import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props => props.theme.colors.red.medium)};
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;
