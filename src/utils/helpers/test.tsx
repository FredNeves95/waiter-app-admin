import 'jsdom-global/register';
import { mount, shallow,   } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { ReactNode } from 'react';
import { ActivePageProvider } from '../../contexts/ActivePageContext';
import { ModalContextProvider } from '../../contexts/ModalContext';
import { OrderContextProvider } from '../../contexts/OrderContext';

export function mountWithTheme(children: ReactNode) {
  return mount(
    <ThemeProvider theme={theme}>
      <ModalContextProvider>
        <ActivePageProvider>
          <OrderContextProvider>
            {children}
          </OrderContextProvider>
        </ActivePageProvider>
      </ModalContextProvider>
    </ThemeProvider>);
}

export function shallowWithTheme(children: ReactNode) {
  return shallow(
    <ThemeProvider theme={theme}>
      <ModalContextProvider>
        <ActivePageProvider>
          <OrderContextProvider>
            {children}
          </OrderContextProvider>
        </ActivePageProvider>
      </ModalContextProvider>
    </ThemeProvider>);
}
