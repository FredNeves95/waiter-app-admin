import * as S from './styles';
import { CurrentOrderModal } from './CurrentOrderModal';
import { useContext } from 'react';
import { ModalContext, ModalContextProps } from '../../contexts/ModalContext';
import { OrderContext, OrderContextProps } from '../../contexts/OrderContext';

export const Modal = () => {
  const { modalType, isVisible, closeModal } = useContext(ModalContext) as ModalContextProps;
  const { currentOrder } = useContext(OrderContext) as OrderContextProps;

  const renderModalTitle = () => {
    let title = '';
    if(modalType === 'current-order'){
      title = `Mesa ${currentOrder?.table}`;
      return title;
    }
  };

  const renderModalContent = () => {
    if(modalType === 'current-order'){
      return (
        <CurrentOrderModal />
      );
    }
  };

  if(!isVisible){
    return null;
  }

  return(
    <S.ModalContainer>
      <S.ModalOverlay/>
      <S.ModalBackground>
        <S.ModalHeader>
          <S.ModalTitle>
            {renderModalTitle()}
          </S.ModalTitle>
          <S.CloseModalButton onClick={closeModal}>
            x
          </S.CloseModalButton>
        </S.ModalHeader>
        <S.ModalContent>
          {renderModalContent()}
        </S.ModalContent>
      </S.ModalBackground>
    </S.ModalContainer>
  );
};
