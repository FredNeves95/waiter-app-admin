import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/GlobalStyles.ts';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.ts';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes.tsx';
import { ActivePageProvider } from './contexts/ActivePageContext.tsx';
import { OrderContextProvider } from './contexts/OrderContext.tsx';
import { ModalContextProvider } from './contexts/ModalContext.tsx';
import { Modal } from './components/Modals/index.tsx';
import { FloatMessageProvider } from './contexts/FloatMessageContext.tsx';
import { FloatMessage } from './components/FloatMessage/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FloatMessageProvider>
        <ModalContextProvider>
          <ActivePageProvider>
            <OrderContextProvider>
              <Modal/>
              <FloatMessage/>
              <RouterProvider router={router}/>
              <GlobalStyles />
            </OrderContextProvider>
          </ActivePageProvider>
        </ModalContextProvider>
      </FloatMessageProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
