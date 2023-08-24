import { describe, expect, it } from 'vitest';
import {mountWithTheme, shallowWithTheme} from '../test';
import { ReactNode } from 'react';

interface MockedContainerProps {
  children: ReactNode
}

const MockedContainer = ({children}: MockedContainerProps) => (
  <div>
    <h1>Teste</h1>
    {children}
  </div>
);

describe('mountWithTheme', () => {
  it('should render component and children', () => {
    const wrapper = mountWithTheme(<MockedContainer><span>children</span></MockedContainer>);
    const child = wrapper.find('span');

    expect(child.text()).toEqual('children');
  });
});

describe('shallowWithTheme', () => {
  it('should render component and children', () => {
    const wrapper = shallowWithTheme(<MockedContainer><span>children</span></MockedContainer>);
    const child = wrapper.find('span');

    expect(child.text()).toEqual('children');

  });
});
