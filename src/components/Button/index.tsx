import {  MouseEventHandler, ReactNode } from 'react';
import * as S from './styles';
import { RestartIcon } from '../Icons/Restarticon';

export interface ButtonProps {
  buttonType?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  type = 'button',
  buttonType = 'primary',
  children,
  disabled = false,
  isLoading = false,
  onClick }: ButtonProps) => {
  return (
    <S.Button type={type} disabled={disabled} button-type={buttonType} onClick={onClick} loading={isLoading.toString()}>
      {
        isLoading ?
          <RestartIcon className='action-icon'/>
          :
          children
      }
    </S.Button>
  );
};
