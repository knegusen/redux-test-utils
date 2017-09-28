import { createMockStore, createMockDispatch } from '../index';
import * as StoreMock from '../utils/StoreMock';
import * as DispatchMock from '../utils/DispatchMock';

describe('createStore', () => {
  it('works', () => {
    spyOn(StoreMock, 'createMockStore');
    const state = 'state';
    createMockStore(state);
    expect(StoreMock.createMockStore).toHaveBeenCalledWith(state);
  });

  describe('example', () => {
    it('works', () => {
      const state = 'state';
      const store = createMockStore(state);
      const action = {
        type: 'type',
        data: 'data',
      };
      store.dispatch(action);

      expect(store.getAction(action.type)).toEqual(action);
      expect(store.getActions()).toEqual([action]);
      expect(store.isActionDispatched(action)).toBe(true);
      expect(store.isActionTypeDispatched(action.type)).toBe(true);
      expect(store.getState()).toBe(state);
    });
  });
});

describe('createMockDispatch', () => {
  it('works', () => {
    spyOn(DispatchMock, 'createMockDispatch');
    createMockDispatch();
    expect(DispatchMock.createMockDispatch).toHaveBeenCalledWith();
  });

  describe('example', () => {
    it('works', () => {
      const dispatchMock = createMockDispatch();
      const action = {
        type: 'type',
        data: 'data',
      };
      dispatchMock.dispatch(action);

      expect(dispatchMock.getAction(action.type)).toEqual(action);
      expect(dispatchMock.getActions()).toEqual([action]);
      expect(dispatchMock.isActionDispatched(action)).toBe(true);
      expect(dispatchMock.isActionTypeDispatched(action.type)).toBe(true);
    });
  });
});
