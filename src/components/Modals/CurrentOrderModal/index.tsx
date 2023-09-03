import { useContext, useState } from 'react';
import { OrderContext, OrderContextProps } from '../../../contexts/OrderContext';

import * as S from './styles';
import { formatToBRCurrency } from '../../../utils/helpers/format';
import { Button } from '../../Button';
import { api } from '../../../api/axios';
import { ModalContext, ModalContextProps } from '../../../contexts/ModalContext';
import { FloatMessageContext, FloatMessageContextProps } from '../../../contexts/FloatMessageContext';

const initialState = {
  action: '',
  isLoading: false
};

export const CurrentOrderModal = () => {
  const { closeModal } = useContext(ModalContext) as ModalContextProps;

  const { currentOrder, refetchOrders } = useContext(OrderContext) as OrderContextProps;
  const { handleFloatingMessageData, handleFloatingMessageVisibility } = useContext(FloatMessageContext) as FloatMessageContextProps;

  const [loadingAction, setLoadingAction] = useState(initialState);

  const renderStatus = () => {
    if(currentOrder?.status === 'WAITING'){
      return '🕒️ Fila de espera';
    }

    if(currentOrder?.status === 'IN_PRODUCTION'){
      return '👩‍🍳 Em progresso';
    }

    return '✅ Finalizado';
  };

  const getTotal = () => {
    let total = 0;

    currentOrder?.products.forEach(item => total = total + (item.quantity * item.product.price));

    return total;
  };

  const handleCancelOrder = async () => {
    try {
      setLoadingAction({ action: 'cancel', isLoading: true });
      await api.patch(`/orders/${currentOrder?._id}`, {
        status: 'CANCELED'
      });
      handleFloatingMessageData({ message: `O pedido da mesa ${currentOrder?.table} foi cancelado com sucesso` });
      await refetchOrders();
    } catch (error) {
      handleFloatingMessageData({ status:'error', message: `Ocorreu um erro ao cancelar o pedido da mesa ${currentOrder?.table}` });
    } finally{
      setLoadingAction(initialState);
      handleFloatingMessageVisibility(true);
      closeModal();
    }
  };

  const handleNextStep = async () => {
    let nextStatus = '';
    let floatMessage = '';
    if(currentOrder?.status === 'WAITING'){
      nextStatus = 'IN_PRODUCTION';
      floatMessage = `O preparo da mesa ${currentOrder.table} iniciou.`;
    }

    if(currentOrder?.status === 'IN_PRODUCTION'){
      nextStatus = 'DONE';
      floatMessage = `O pedido da mesa ${currentOrder.table} foi finalizado.`;
    }

    try {
      setLoadingAction({ action: 'next_step', isLoading: true });
      await api.patch(`/orders/${currentOrder?._id}`, {
        status: nextStatus
      });
      handleFloatingMessageData({ message: floatMessage });
      await refetchOrders();
    } catch (error) {
      handleFloatingMessageData({ status:'error', message: `Ocorreu um erro ao atualizar o pedido da mesa ${currentOrder?.table}` });
    } finally{
      setLoadingAction(initialState);
      handleFloatingMessageVisibility(true);
      closeModal();
    }
  };

  const renderNextStepButtonText = () => {
    if(currentOrder?.status === 'WAITING'){
      return 'Iniciar Preparo';
    }

    if(currentOrder?.status === 'IN_PRODUCTION'){
      return 'Concluir Pedido';
    }
  };

  return(
    <S.Container>
      <S.StatusSection>
        <S.SectionTitle>Status do Pedido</S.SectionTitle>
        <div className="status-value">{renderStatus()}</div>
      </S.StatusSection>
      <S.ItemsSection>
        <S.SectionTitle>Itens</S.SectionTitle>
        {
          currentOrder?.products.map((item, index) => (
            <S.Item key={index}>
              <img src={`http://localhost:3001/uploads/${item.product.imagePath}`} alt={item.product.name}/>
              <span className='item-quantity'>
                {item.quantity}x
              </span>
              <span className='item-info'>
                <span className='item-name'>
                  {item.product.name}
                </span>
                <span className='item-price'>
                  {formatToBRCurrency.format(item.product.price)}
                </span>
              </span>
            </S.Item>
          ))
        }
      </S.ItemsSection>
      <S.TotalSection>
        <S.SectionTitle>Total</S.SectionTitle>
        <span className='total-value'>
          {formatToBRCurrency.format(getTotal())}
        </span>
      </S.TotalSection>
      { currentOrder?.status !== 'DONE' && <S.ActionsFooter>
        <Button
          buttonType='secondary'
          onClick={handleCancelOrder}
          isLoading={loadingAction.action === 'cancel' && loadingAction.isLoading}
        >
          Cancelar Pedido
        </Button>
        <Button
          onClick={handleNextStep}
          isLoading={loadingAction.action === 'next_step' && loadingAction.isLoading}
        >
          {renderNextStepButtonText()}
        </Button>

      </S.ActionsFooter>}
    </S.Container>
  );
};
