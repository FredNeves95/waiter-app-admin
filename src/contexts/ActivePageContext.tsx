import { ReactNode, createContext, useState } from 'react';
import { InternalPagesLinks } from '../utils/types/internalPages';

export interface ActivePageContextProps {
  activePage: InternalPagesLinks
  handleActivePage: (page: InternalPagesLinks) => void
}

interface ActivePageProviderProps {
  children: ReactNode
}

export const ActivePageContext = createContext<ActivePageContextProps | null>(null);

export const ActivePageProvider = ({ children }: ActivePageProviderProps) => {
  const [activePage, setActivePage] = useState<InternalPagesLinks>('/home');

  const handleActivePage = (page: InternalPagesLinks) => {
    setActivePage(page);
  };

  return (
    <ActivePageContext.Provider value={{ activePage, handleActivePage }}>
      {children}
    </ActivePageContext.Provider>
  );
};
