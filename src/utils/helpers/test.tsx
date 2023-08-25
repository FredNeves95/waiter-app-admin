import 'jsdom-global/register';
import { mount, shallow,   } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import {theme} from '../../styles/theme';

export function mountWithTheme(children) {
  return mount(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>);
}

export function shallowWithTheme(children) {
  return shallow(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>);
}
