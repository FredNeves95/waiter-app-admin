import 'jsdom-global/register';

import { describe, expect, it } from 'vitest';
import { Header } from '..';
import { ActivePageContext, ActivePageContextProps } from '../../../contexts/ActivePageContext';
import { mount } from 'enzyme';
import { theme } from '../../../styles/theme';
import { ThemeProvider } from 'styled-components';

const defaultProvider: ActivePageContextProps = {
  activePage: '/home',
  handleActivePage: () => {}
};

const customRender = (props = defaultProvider) => (
  mount(
    <ThemeProvider theme={theme}>
      <ActivePageContext.Provider value={props}>
        <Header/>
      </ActivePageContext.Provider>
    </ThemeProvider>
  ));

describe('Header', () => {
  it('Should display Home data when current page is home', () => {
    const header = customRender();

    const title = header.find('h4');
    const description = header.find('p');
    const action = header.find('button');

    expect(title.text()).toBe('Home');
    expect(description.text()).toBe('Acompanhe os pedidos dos clientes');
    expect(action.text()).toContain('Reiniciar o dia');
  });
  it('Should display History data when current page is history', async () => {
    const header = customRender({ ...defaultProvider, activePage: '/history' });
    const title = header.find('h4');
    const description = header.find('p');
    const action = header.find('button');

    expect(title.text()).toBe('Histórico');
    expect(description.text()).toBe('Visualize pedidos anteriores');
    expect(action.exists()).toBeFalsy();
  });
  it('Should display Menu data when current page is menu', async () => {
    const header = customRender({ ...defaultProvider, activePage: '/menu' });
    const title = header.find('h4');
    const description = header.find('p');
    const action = header.find('button');

    expect(title.text()).toBe('Cardápio');
    expect(description.text()).toBe('Gerencie os produtos do seu estabelecimento');
    expect(action.exists()).toBeFalsy();
  });
  it('Should display Users data when current page is users', async () => {
    const header = customRender({ ...defaultProvider, activePage: '/users' });
    const title = header.find('h4');
    const description = header.find('p');
    const action = header.find('button');

    expect(title.text()).toBe('Usuários');
    expect(description.text()).toBe('Cadastre e gerencie seus usuários');
    expect(action.exists()).toBeFalsy();
  });
  it('Should display Profile data when current page is profile', async () => {
    const header = customRender({ ...defaultProvider, activePage: '/profile' });
    const title = header.find('h4');
    const description = header.find('p');
    const action = header.find('button');

    expect(title.text()).toBe('Meu Perfil');
    expect(description.text()).toBe('Gerencie o seu perfil');
    expect(action.exists()).toBeFalsy();
  });
  it('Should display Logout data when current page is logout', async () => {
    const header = customRender({ ...defaultProvider, activePage: '/logout' });
    const title = header.find('h4');
    const description = header.find('p');
    const action = header.find('button');

    expect(title.text()).toBe('Sair');
    expect(description.exists()).toBeFalsy();
    expect(action.exists()).toBeFalsy();
  });
});
