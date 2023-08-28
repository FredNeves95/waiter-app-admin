import 'jsdom-global/register';

import { describe, expect, it, vi } from 'vitest';
import { Navbar } from '..';
import { ActivePageContext, ActivePageContextProps } from '../../../contexts/ActivePageContext';
import { mount } from 'enzyme';
import { theme } from '../../../styles/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const mockHandleActivePage = vi.fn();

const defaultProvider: ActivePageContextProps = {
  activePage: '/home',
  handleActivePage: mockHandleActivePage
};

const customRender = (props = defaultProvider) => (
  mount(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ActivePageContext.Provider value={props}>
          <Navbar/>
        </ActivePageContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  ));

describe('Navbar', () => {
  it('Should display home link active as default', () => {
    const navbar = customRender();
    const navOptions = navbar.find('ul');
    const homeLink = navOptions.findWhere(node => {
      return node.type() === 'li' && !!node.name() && !!node.text().includes('Home');
    }).find('a');

    expect(homeLink.props().isactive).toBeTruthy();
  });

  it('Should display call handleActivePage after clicking the link', () => {
    const navbar = customRender();
    const navOptions = navbar.find('ul');

    const historyLink = navOptions.findWhere(node => {
      return node.type() === 'li' && !!node.name() && !!node.text().includes('Histórico');
    }).find('a');

    historyLink.simulate('click');
    expect(mockHandleActivePage).toHaveBeenCalledWith('/history');


    const menuLink = navOptions.findWhere(node => {
      return node.type() === 'li' && !!node.name() && !!node.text().includes('Cardápio');
    }).find('a');

    menuLink.simulate('click');
    expect(mockHandleActivePage).toHaveBeenCalledWith('/menu');

    const usersLink = navOptions.findWhere(node => {
      return node.type() === 'li' && !!node.name() && !!node.text().includes('Usuários');
    }).find('a');

    usersLink.simulate('click');
    expect(mockHandleActivePage).toHaveBeenCalledWith('/users');

    const profileLink = navOptions.findWhere(node => {
      return node.type() === 'li' && !!node.name() && !!node.text().includes('Meu Perfil');
    }).find('a');

    profileLink.simulate('click');
    expect(mockHandleActivePage).toHaveBeenCalledWith('/profile');

    const logoutLink = navOptions.findWhere(node => {
      return node.type() === 'li' && !!node.name() && !!node.text().includes('Sair');
    }).find('a');

    logoutLink.simulate('click');
    expect(mockHandleActivePage).toHaveBeenCalledWith('/logout');

    const homeLink = navOptions.findWhere(node => {
      return node.type() === 'li' && !!node.name() && !!node.text().includes('Home');
    }).find('a');

    homeLink.simulate('click');
    expect(mockHandleActivePage).toHaveBeenCalledWith('/home');
  });
});
