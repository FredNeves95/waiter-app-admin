import { ReactNode, createContext, useState } from 'react';

type ModalContextProviderProps = {
  children: ReactNode;
}

type ModalTypes = 'current-order'

export interface ModalContextProps {
  isVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
  modalType?: ModalTypes;
  handleModalType: (type: ModalTypes) => void
}

export const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalContextProvider = ({ children }: ModalContextProviderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalType, setModalType] = useState<ModalTypes | undefined>('current-order');

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  const handleModalType = (type: ModalTypes) => {
    setModalType(type);
  };

  return(
    <ModalContext.Provider value={{ isVisible, openModal, closeModal, modalType, handleModalType }}>
      {children}
    </ModalContext.Provider>
  );
};
