import { FormEvent, useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import * as S from './styles';
import { useErrors } from '../../hooks/useError';
import { isValidEmail } from '../../utils/functions/validations';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {errors, setError, removeError, getErrorMessageByFieldName} = useErrors();

  const isDisabled = !email || !password || !!errors.length;

  const handleEmailChange = (event: {target: HTMLInputElement}) => {
    setEmail(event.target.value);
    if (event.target.value && !isValidEmail(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' });
    } else {
      removeError('email');
    }
  };

  const handlePasswordChange = (event: {target: HTMLInputElement}) => {
    setPassword(event.target.value);
    if (event.target.value && password.length < 8) {
      setError({ field: 'password', message: 'Senha incorreta. Tente novamente.' });
    } else {
      removeError('password');
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    console.log({errors});
    event.preventDefault();
    console.log({email, password});
  };

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <span className='welcome-text'>
            Bem-vindo(a) ao
          </span>
          <span>
            <strong>WAITER</strong><small>APP</small>
          </span>
        </S.Header>
        <S.Form onSubmit={handleSubmit} noValidate>
          <Input
            type='email'
            placeholder='Seu e-mail de acesso'
            label='E-mail'
            name='email'
            error={getErrorMessageByFieldName('email')}
            onChange={handleEmailChange}
          />
          <Input
            type='password'
            placeholder='Informe sua senha'
            label='Senha'
            name='password'
            error={getErrorMessageByFieldName('password')}
            onChange={handlePasswordChange}
          />
          <Button type='submit' disabled={isDisabled}>
            Fazer Login
          </Button>
        </S.Form>
      </S.Content>
    </S.Container>
  );
};
