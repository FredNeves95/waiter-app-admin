import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${(props) => props.theme.colors.gray[500]}
`;

export const Input = styled.input<{error: boolean}>`
  padding: 0 16px;
  height: 56px;
  border: 1px solid ${(props) => props.error ? props.theme.colors.red.medium : props.theme.colors.gray[200]};
  border-radius: 8px;
`;

export const ErrorMessage = styled.span`
  margin-top: 8px;
  color: ${(props) => props.theme.colors.red.medium};
  display: flex;
  gap: 4px;
  align-items: center;
`;
