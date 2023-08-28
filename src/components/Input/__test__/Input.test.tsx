import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Input, InputProps } from '../index';
import { mountWithTheme } from '../../../utils/helpers/test';


describe('<Input/>', () => {
  const handleChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderComponent = (props?: InputProps) =>
    mountWithTheme(<Input {...props} label='test' name='test' onChange={handleChange}/>);

  it('Should match the snapshot', () => {
    const input = renderComponent({
      placeholder: 'mocked placeholder',
      error: 'This field is required'
    });
    expect(input.html()).toMatchSnapshot();
  });

  it('Should render input', () => {
    const input = renderComponent();
    expect(input.isEmptyRender()).toBeFalsy();
  });

  it('Should render input with label received from props', () => {
    const input = renderComponent();
    expect(input.find('label').text()).toEqual('test');
  });

  it('Should render input with placeholder received from props', () => {
    const input = renderComponent({ placeholder: 'mocked placeholder' });
    expect(input.find('input').prop('placeholder')).toEqual('mocked placeholder');
  });

  it('Should execute handleChange function after typing in the input', () => {
    const input = renderComponent();

    const textInput = input.find('input');

    expect(handleChange).not.toHaveBeenCalled();

    textInput.simulate('change', { target: { name: 'test', value:'mocked typing' } });

    expect(handleChange).toHaveBeenCalled();
  });

  it('Should display error message when error is received from props', () => {
    const input = renderComponent({ error: 'This field is required' });
    expect(input.find('span').text()).toEqual('This field is required');
  });
});
