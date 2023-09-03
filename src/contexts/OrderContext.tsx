import { ReactNode, createContext, useState } from 'react';
import { Order } from '../utils/types/orders';
import { api } from '../api/axios';

export interface OrderContextProps {
  currentOrder?: Order;
  handleCurrentOrder: (order: Order) => void;
  orders?: Order[];
  getOrders: () => Promise<void>;
  refetchOrders: () => Promise<void>
}


interface OrderContextProviderProps {
  children: ReactNode;
}

export const OrderContext = createContext<OrderContextProps | null>(null);

export const OrderContextProvider = ({ children }:OrderContextProviderProps ) => {
  const [currentOrder, setCurrentOrder] = useState<undefined | Order>();
  const [orders, setOrders] = useState<Order[] | undefined>();

  const getOrders = async () => {
    try {
      const res = await api.get('/orders');
      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCurrentOrder = (order: Order) => {
    setCurrentOrder(order);
  };

  const refetchOrders = async () => {
    await getOrders();
  };
  return (
    <OrderContext.Provider value={{ orders, getOrders,currentOrder, handleCurrentOrder, refetchOrders }}>
      {children}
    </OrderContext.Provider>
  );
};
