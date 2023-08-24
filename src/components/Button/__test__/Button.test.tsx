import {beforeEach, describe, expect, it, vi} from 'vitest';
import {Button, ButtonProps} from '../index';
import { mountWithTheme } from '../../../utils/helpers/test';


describe('<Button/>', () => {
  const handleClick = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderComponent = (props?: ButtonProps) =>
    mountWithTheme(<Button {...props} onClick={handleClick}/>);

  it('Should match the snapshot', () => {
    const buttonPrimary = renderComponent();
    const buttonSecondary = renderComponent({buttonType: 'secondary'});

    expect(buttonPrimary.html()).toMatchSnapshot();
    expect(buttonSecondary.html()).toMatchSnapshot();
  });

  it('Should render button', () => {
    const button = renderComponent();
    expect(button.isEmptyRender()).toBeFalsy();
  });

  it('Should render button with children received from props', () => {
    const button = renderComponent({
      children: <div id='mocked-children'>test</div>
    });

    const child = button.find('#mocked-children');
    expect(child.isEmptyRender()).toBeFalsy();
    expect(child.text()).toEqual('test');
  });

  it('Should execute handleClick function after clicking the button', () => {
    const button = renderComponent();
    expect(handleClick).not.toHaveBeenCalled();
    button.simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });

  it('Should not execute handleClick function after clicking the button when button is disabled', () => {
    const button = renderComponent({disabled: true});
    expect(handleClick).not.toHaveBeenCalled();
    button.simulate('click');
    expect(handleClick).not.toHaveBeenCalled();
  });
});
