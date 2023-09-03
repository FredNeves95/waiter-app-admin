import styled, { css } from 'styled-components';
import { keyframes } from 'styled-components';

const buttonLoadingSpinner = keyframes`
  from {
      transform: rotate(0turn);
  }

  to {
      transform: rotate(1turn);
  }
`;

export const Button = styled.button<{'button-type': 'primary' | 'secondary', 'loading': string}>`
  padding: 14px 28px;
  font-size: 16px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  transition: all 0.1s linear;

  ${(props) => {
    switch (props['button-type']) {
    case 'secondary':
      return css`
          background-color:  transparent;
          border: none;
          color: ${props.theme.colors.red.medium};

        &:disabled {
          color: ${props.theme.colors.gray[200]};
          cursor: not-allowed;
        }

        &:hover {
          color: ${!props.disabled && props.theme.colors.red.dark};
        }
        `;
    default:
      return css`
        background-color: ${props.theme.colors.red.medium};
        color: #FFFFFF;
        border: none;
        border-radius: 44px;

        &:disabled {
          background-color: ${props.theme.colors.gray[200]};
          cursor: not-allowed;
        }

        &:hover {
          background-color: ${!props.disabled && props.theme.colors.red.dark};
        }
      `;
    }}}

.action-icon {
    ${
  (props) => props.loading === 'true' &&
        css`
      animation: ${buttonLoadingSpinner} 1s ease infinite;
      `
}
}
`;
