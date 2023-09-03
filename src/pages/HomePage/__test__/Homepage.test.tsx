import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { HomePage } from '../index';
import { mountWithTheme } from '../../../utils/helpers/test';
import { mockedOrders } from '../../../utils/constants/mocks';
import { act } from 'react-dom/test-utils';

const mocks = vi.hoisted(() => ({
  get: vi.fn(),
  post: vi.fn(),
  // and any other request type you want to mock
}));

vi.mock('axios', async(importActual) => {
  const actual = await importActual<typeof import ('axios')>();

  const mockAxios = {
    default: {
      ...actual.default,
      create: vi.fn(() => ({
        ...actual.default.create(),
        get: mocks.get,
        post: mocks.post,
      })),
    },
  };

  return mockAxios;
});


const renderHomePage = () => mountWithTheme(<HomePage/>);

describe('Home page', () => {
  let wrapper = renderHomePage();

  beforeEach(async () => {
    mocks.get.mockResolvedValue({
      data: mockedOrders,
    });

    wrapper = renderHomePage();
    await act(() => {
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  } );

  it('Should render the three trail steps', () => {
    expect(wrapper.find('span').find({ id: 'WAITING' }).exists()).toBeTruthy();
    expect(wrapper.find('span').find({ id: 'IN_PRODUCTION' }).exists()).toBeTruthy();
    expect(wrapper.find('span').find({ id: 'DONE' }).exists()).toBeTruthy();
  });

  it('Should render one product with waiting status, as received from mock', () => {
    expect(wrapper.find('span').find({ id: 'WAITING' }).find('.amount').text()).toEqual('1');
  });

  it('Should render two products with in_production status, as received from mock', () => {
    expect(wrapper.find('span').find({ id: 'IN_PRODUCTION' }).find('.amount').text()).toEqual('2');
  });

  it('Should render one product with done status, as received from mock', () => {
    expect(wrapper.find('span').find({ id: 'DONE' }).find('.amount').text()).toEqual('1');
  });
});
