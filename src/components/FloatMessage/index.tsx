import { useContext, useEffect, useState } from 'react';
import { FloatMessageContext, FloatMessageContextProps } from '../../contexts/FloatMessageContext';
import { createPortal } from 'react-dom';
import success from '../../assets/images/success.png';
import * as S from './style';
import { Status } from '../../utils/types/floatMessage';

export const FloatMessage = () => {
  const { showFloatingMessage, handleFloatingMessageVisibility, floatingMessageData } = useContext(FloatMessageContext) as FloatMessageContextProps;

  if(!showFloatingMessage) return <></>;

  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => prev - 1);
    }, 10);

    return () =>  clearInterval(interval);
  }, []);

  useEffect(() => {
    if(progress <=0) {
      handleFloatingMessageVisibility(false);
    }
  }, [progress]);

  return showFloatingMessage &&
    createPortal(
      <S.Container>
        <S.Content>
          {
            floatingMessageData.status === 'success' &&
            <img src={success} alt="float message status"/>
          }
          <span className='float-message'>
            {floatingMessageData.message}
          </span>
          <button onClick={() => handleFloatingMessageVisibility(false)}>x</button>
        </S.Content>
        <S.ProgressBar max={100} value={progress} status={floatingMessageData.status as Status}></S.ProgressBar>
      </S.Container>
      , document.getElementById('float-message') as HTMLElement
    );
};
