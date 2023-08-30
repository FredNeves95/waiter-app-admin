import { ReactNode, createContext, useState } from 'react';
import { Order } from '../utils/types/orders';

export interface OrderContextProps {
  currentOrder?: Order;
  handleCurrentOrder: (order: Order) => void
}


interface OrderContextProviderProps {
  children: ReactNode;
}

export const OrderContext = createContext<OrderContextProps | null>(null);

export const OrderContextProvider = ({ children }:OrderContextProviderProps ) => {
  const [currentOrder, setCurrentOrder] = useState<undefined | Order>();

  const handleCurrentOrder = (order: Order) => {
    setCurrentOrder(order);
  };

  return (
    <OrderContext.Provider value={{ currentOrder, handleCurrentOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
