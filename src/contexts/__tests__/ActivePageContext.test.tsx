import 'jsdom-global/register';

import { mount } from 'enzyme';
import { ActivePageContext, ActivePageContextProps, ActivePageProvider } from '../ActivePageContext';
import { useContext } from 'react';
import { describe, expect, it } from 'vitest';

const MockedComponent = () => {
  const { activePage, handleActivePage } = useContext(ActivePageContext) as ActivePageContextProps;

  return(
    <>
      <div id='value'>{activePage}</div>
      <button onClick={() => handleActivePage('/history')}>Handle Active</button>
    </>
  );
};

const renderContextData = () => {
  return mount(
    <ActivePageProvider>
      <MockedComponent/>
    </ActivePageProvider>
  );
};

describe('ActivePageContext', () => {
  it('Should return home page as default and set new active page after calling handleActivePage function', () => {
    const testContext = renderContextData();

    const activePage = testContext.find('div').text();
    expect(activePage).toBe('/home');
    const button = testContext.find('button');

    button.simulate('click');
    const newActivePage = testContext.find('div').text();
    expect(newActivePage).toBe('/history');

  });
});
