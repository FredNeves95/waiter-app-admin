import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/GlobalStyles.ts';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.ts';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes.tsx';
import { ActivePageProvider } from './contexts/ActivePageContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ActivePageProvider>
        <RouterProvider router={router}/>
        <GlobalStyles />
      </ActivePageProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
