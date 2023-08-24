import {afterEach, describe, expect, it, vi} from 'vitest';
import {LoginPage} from '../index';
import { mountWithTheme } from '../../../utils/helpers/test';


describe('<LoginPage/>', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  const renderComponent = () =>
    mountWithTheme(<LoginPage/>);

  it('Should match the snapshot', () => {
    const loginPage = renderComponent();
    expect(loginPage.html()).toMatchSnapshot();
  });

  it('Should render loginPage', () => {
    const loginPage = renderComponent();
    expect(loginPage.isEmptyRender()).toBeFalsy();
  });

  it('Should not execute handleSubmit after clicking the button if there is no email or password', () => {
    const loginPage = renderComponent();

    const handleSubmitSpy = vi.spyOn(console, 'log');
    const button = loginPage.find('button');

    button.simulate('submit');

    expect(handleSubmitSpy).not.toHaveBeenCalled();
  });

  it('Should not execute handleSubmit after clicking the button if there is no valid email', () => {
    const loginPage = renderComponent();

    const handleSubmitSpy = vi.spyOn(console, 'log');
    const button = loginPage.find('button');

    const emailInput = loginPage.find('input[type="email"]');
    const passwordInput = loginPage.find('input[type="password"]');

    emailInput.simulate('change', {target: {name: 'email', value:'invalid email'}});
    passwordInput.simulate('change', {target: {name: 'password', value:'12345678'}});

    button.simulate('submit');

    expect(handleSubmitSpy).not.toHaveBeenCalled();
  });

  it('Should not execute handleSubmit after clicking the button if there is valid email but password with less than 8 characters', () => {
    const loginPage = renderComponent();

    const handleSubmitSpy = vi.spyOn(console, 'log');
    const button = loginPage.find('button');

    const emailInput = loginPage.find('input[type="email"]');
    const passwordInput = loginPage.find('input[type="password"]');

    emailInput.simulate('change', {target: {name: 'email', value:'valid@mail.com'}});
    passwordInput.simulate('change', {target: {name: 'password', value:'1234567'}});

    button.simulate('submit');

    expect(handleSubmitSpy).not.toHaveBeenCalled();
  });
  it('Should execute handleSubmit after clicking the button if there is valid email and password', () => {
    const loginPage = renderComponent();

    const handleSubmitSpy = vi.spyOn(console, 'log');
    const button = loginPage.find('button');

    const emailInput = loginPage.find('input[type="email"]');
    const passwordInput = loginPage.find('input[type="password"]');

    emailInput.simulate('change', {target: {name: 'email', value:'valid@mail.com'}});
    passwordInput.simulate('change', {target: {name: 'password', value:'123456789'}});

    button.simulate('submit');

    expect(handleSubmitSpy).toHaveBeenCalled();
  });
});
