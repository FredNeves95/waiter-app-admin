import { styled } from 'styled-components';

export const Container = styled.header`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;

  margin-bottom: 48px;
`;

export const TextContainer = styled.section`
  display: flex;
  flex-direction: column;

  gap: 17px;

  p {
    color: ${(props) => props.theme.colors.gray[400]};
  }
`;

export const Title = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  color: ${(props) => props.theme.colors.gray[500]};

  .icon-class {
    width: 24px;
    height: 24px;
  }
`;
