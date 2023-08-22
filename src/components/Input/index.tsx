import { ChangeEventHandler } from 'react';
import info from '../../assets/images/info.svg';

import * as S from './styles';

interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  label: string;
  name: string;
  error?: string;
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const Input = ({type = 'text', placeholder, label, name, error, onChange}: InputProps) => {
  return (
    <S.Container>
      <S.Label>
        {label}
        <S.Input type={type} placeholder={placeholder} name={name} onChange={onChange} error={!!error}/>
      </S.Label>
      {
        error && (
          <S.ErrorMessage>
            <img src={info} alt='Info'/>
            {error}
          </S.ErrorMessage>
        )
      }
    </S.Container>
  );
};
