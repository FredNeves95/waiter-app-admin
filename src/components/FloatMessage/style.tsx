import { styled } from 'styled-components';
import { Status } from '../../utils/types/floatMessage';

export const Container = styled.span`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 64px;
  margin: 0 auto;
  width: 339px;
  min-height: 70px;
  background-color: ${(props) => props.theme.colors.gray[0]};
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const Content = styled.div`
  flex: 1;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;

  .float-message {
    width: 50%;
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray[400]}
  }

  button {
    position: absolute;
    border: none;
    background-color: transparent;
    right: 8px;
    top: 8px;
    color: ${(props) => props.theme.colors.gray[400]};
    font-weight: 600;
  }
`;

export const ProgressBar = styled.progress<{status: Status}>`
  width: 100%;
  height: 16px;
  accent-color: ${(props) => props.status === 'success' ? '#16AD3E' : props.theme.colors.red.medium};
`;
