/**
 * @vitest-environment jsdom
 */

import { describe, expect, it } from 'vitest';
import { useErrors } from '../useError';
import { act, renderHook } from '@testing-library/react-hooks';

describe('useErrors', () => {
  it('should set an error if one error is passed for setError function', () => {
    const { result } = renderHook(() => useErrors());

    expect(result.current.errors.length).toEqual(0);

    act(() => {
      result.current.setError({ field: 'test', message: 'test error' });
    });
    expect(result.current.errors.length).toEqual(1);
  });

  it('should not duplicate errors', () => {
    const { result } = renderHook(() => useErrors());

    expect(result.current.errors.length).toEqual(0);

    act(() => {
      result.current.setError({ field: 'test', message: 'test error' });
    });

    expect(result.current.errors.length).toEqual(1);
    let duplicatedResponse;
    act(() => {
      duplicatedResponse = result.current.setError({ field: 'test', message: 'test error' });
    });
    expect(duplicatedResponse).toEqual(null);
    expect(result.current.errors.length).toEqual(1);
  });

  it('should remove an error by its field when calling removeError function', () => {
    const { result } = renderHook(() => useErrors());

    expect(result.current.errors.length).toEqual(0);

    act(() => {
      result.current.setError({ field: 'test', message: 'test error' });
    });

    expect(result.current.errors.length).toEqual(1);

    act(() => {
      result.current.removeError('test');
    });

    expect(result.current.errors.length).toEqual(0);
  });

  it('should return the error message after calling getErrorMessageByFieldName function', () => {
    const { result } = renderHook(() => useErrors());

    act(() => {
      result.current.setError({ field: 'test', message: 'test error' });
    });

    expect(result.current.getErrorMessageByFieldName('test')).toEqual('test error');
  });
});
