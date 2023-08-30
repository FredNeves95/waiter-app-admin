import { useContext } from 'react';
import { OrderContext, OrderContextProps } from '../../../contexts/OrderContext';

import * as S from './styles';
import { formatToBRCurrency } from '../../../utils/helpers/format';

export const CurrentOrderModal = () => {
  const { currentOrder } = useContext(OrderContext) as OrderContextProps;

  const renderStatus = () => {
    if(currentOrder?.status === 'awaiting'){
      return '🕒️ Fila de espera';
    }

    if(currentOrder?.status === 'in-progress'){
      return '👩‍🍳 Em progresso';
    }

    return '✅ Finalizado';
  };

  const getTotal = () => {
    let total = 0;

    currentOrder?.products.forEach(item => total = total + (item.quantity * item.product.price));

    return total;
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
              <img src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' alt={item.product.name}/>
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
    </S.Container>
  );
};
