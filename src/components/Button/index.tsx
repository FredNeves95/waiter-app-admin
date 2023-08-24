import {  MouseEventHandler, ReactNode } from 'react';
import * as S from './styles';

export interface ButtonProps {
  buttonType?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({type = 'button', buttonType = 'primary', children, disabled = false, onClick }: ButtonProps) => {
  return (
    <S.Button type={type} disabled={disabled} button-type={buttonType} onClick={onClick}>
      {children}
    </S.Button>
  );
};
