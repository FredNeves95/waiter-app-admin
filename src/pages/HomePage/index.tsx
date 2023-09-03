import { useContext, useEffect } from 'react';
import * as S from './styles';
import { ModalContext, ModalContextProps } from '../../contexts/ModalContext';
import { OrderContext, OrderContextProps } from '../../contexts/OrderContext';
import { Order, OrderStatus } from '../../utils/types/orders';
interface TrailSteps {
  emoji: string;
  title: string;
  status: OrderStatus;
}

const trailSteps: TrailSteps[] = [
  {
    emoji: '🕒️',
    title: 'Fila de espera',
    status: 'WAITING'
  },
  {
    emoji: '👩‍🍳',
    title: 'Em produção',
    status: 'IN_PRODUCTION'
  },
  {
    emoji: '✅',
    title: 'Pronto',
    status: 'DONE'
  },
];

export const HomePage = () => {
  const { openModal, handleModalType } = useContext(ModalContext) as ModalContextProps;
  const { handleCurrentOrder, getOrders, orders } = useContext(OrderContext) as OrderContextProps;

  useEffect(() => {
    getOrders();
  },[]);

  const handleClick = (order: Order) => {
    handleModalType('current-order');
    handleCurrentOrder(order);
    openModal();
  };

  return(
    <S.Container>
      {
        trailSteps.map(step => {
          const stepOrders = orders?.filter(order => order.status === step.status);
          return (
            <S.OrderTrailStep key={step.title} id={step.status}>
              <S.TrailStepTitle>
                <span className='emoji'>{step.emoji}</span>
                <span className='title'>{step.title}</span>
                <span className="amount">{stepOrders?.length}</span>
              </S.TrailStepTitle>

              {
                !!stepOrders?.length &&
                <S.TableContainer>
                  {stepOrders.map((order) =>
                    <S.Table key={order._id} onClick={() => handleClick(order)}>
                      <h6 className='table-name'>Mesa {order.table}</h6>
                      <p className='table-items'>
                        {
                          order.products.length === 1 ?
                            '1 item'
                            : `${order.products.length} itens` }
                      </p>
                    </S.Table>
                  )}
                </S.TableContainer>
              }
            </S.OrderTrailStep>
          );
        })
      }
    </S.Container>
  );
};
