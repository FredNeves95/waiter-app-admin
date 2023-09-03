import { ReactNode, createContext, useEffect, useState } from 'react';
import { Status } from '../utils/types/floatMessage';

interface FloatMessageProviderProps {
  children: ReactNode
}

interface FloatMessageData {
  message: string;
  status?: Status;
}

export interface FloatMessageContextProps {
  showFloatingMessage: boolean;
  handleFloatingMessageVisibility: (isVisible: boolean) => void;
  floatingMessageData: FloatMessageData;
  handleFloatingMessageData: (data: FloatMessageData) => void
}

export const FloatMessageContext = createContext<FloatMessageContextProps | null>(null);

const initialData: FloatMessageData = {
  message: 'Ocorreu um erro ao cancelar o pedido da mesa 1',
  status: 'success',
};

export const FloatMessageProvider = ({ children }: FloatMessageProviderProps) => {
  const [showFloatingMessage, setShowFloatingMessage] = useState(false);

  const [floatingMessageData, setFloatingMessageData] = useState(initialData);

  const handleFloatingMessageVisibility = (isVisible: boolean) => {
    setShowFloatingMessage(isVisible);
  };

  const handleFloatingMessageData = ({ message, status = 'success' }: FloatMessageData) => {
    setFloatingMessageData({ message, status });
  };

  const clearFloatingMessageData = () => {
    setFloatingMessageData(initialData);
  };

  useEffect(() => {
    if(!showFloatingMessage){
      clearFloatingMessageData();
    }
  },[showFloatingMessage]);

  return(
    <FloatMessageContext.Provider value={{ showFloatingMessage, handleFloatingMessageVisibility, floatingMessageData, handleFloatingMessageData }}>
      {children}
    </FloatMessageContext.Provider>
  );
};
