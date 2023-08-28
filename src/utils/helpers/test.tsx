import 'jsdom-global/register';
import { mount, shallow,   } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { ReactNode } from 'react';
import { ActivePageProvider } from '../../contexts/ActivePageContext';

export function mountWithTheme(children: ReactNode) {
  return mount(
    <ThemeProvider theme={theme}>
      <ActivePageProvider>
        {children}
      </ActivePageProvider>
    </ThemeProvider>);
}

export function shallowWithTheme(children: ReactNode) {
  return shallow(
    <ThemeProvider theme={theme}>
      <ActivePageProvider>
        {children}
      </ActivePageProvider>
    </ThemeProvider>);
}
