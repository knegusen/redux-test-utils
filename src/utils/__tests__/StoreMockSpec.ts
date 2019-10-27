import * as DispatchMock from '../DispatchMock';
import { createMockStore, emptyStore } from '../StoreMock';

describe('StoreMock', () => {
  describe('emptyStore', () => {
    const store = emptyStore();

    describe('getState()', () => {
      it('returns empty state object', () => {
        expect(store.getState()).toEqual({});
      });
    });

    describe('subscribe', () => {
      it('is defined', () => {
        expect(typeof store.subscribe).toBe('function');
      });
    });
  });

  describe('createMockStore', () => {
    describe('state', () => {
      describe('when not provided', () => {
        it('returns empty object', () => {
          expect(createMockStore({}).getState()).toEqual({});
        });
      });
      describe('when provided', () => {
        it('returns that state', () => {
          const state = 'state';
          expect(createMockStore(state).getState()).toEqual(state);
        });
      });
    });

    describe('subscribe', () => {
      it('works', () => {
        const subscriber = jest.fn();
        const mockStore = createMockStore({});
        mockStore.subscribe(subscriber);
        const action = { type: 'action' };
        mockStore.dispatch(action);
        expect(subscriber).toHaveBeenCalled();
      });
    });

    describe('dispatch', () => {
      it('uses dispatchMock', () => {
        const dispatch = jest.fn();
        // @ts-ignore
        DispatchMock.createMockDispatch = jest.fn().mockReturnValueOnce({ dispatch });
        const store = createMockStore({});
        store.dispatch({ type: '' });
        expect(dispatch).toHaveBeenCalled();
      });

      describe('getDispatchActions', () => {
        it('uses dispatchMock', () => {
          const getActions = 'getActions function';
          // @ts-ignore
          DispatchMock.createMockDispatch = jest.fn().mockReturnValueOnce({ getActions });
          const store = createMockStore({});
          expect(store.getActions).toBe(getActions);
        });
      });

      describe('getDispatchAction', () => {
        it('uses dispatchMock', () => {
          const getAction = 'getAction function';
          // @ts-ignore
          DispatchMock.createMockDispatch = jest.fn().mockReturnValueOnce({ getAction });
          const store = createMockStore({});
          expect(store.getAction).toBe(getAction);
        });
      });

      describe('isActionTypeDispatched', () => {
        it('uses dispatchMock', () => {
          const isActionTypeDispatched = 'isActionTypeDispatched function';
          // @ts-ignore
          DispatchMock.createMockDispatch = jest
            .fn()
            .mockReturnValueOnce({ isActionTypeDispatched });
          const store = createMockStore({});
          expect(store.isActionTypeDispatched).toBe(isActionTypeDispatched);
        });
      });

      describe('isActionDispatched', () => {
        it('uses dispatchMock', () => {
          const isActionDispatched = 'isActionTypeDispatched function';
          // @ts-ignore
          DispatchMock.createMockDispatch = jest.fn().mockReturnValueOnce({ isActionDispatched });
          const store = createMockStore({});
          expect(store.isActionDispatched).toBe(isActionDispatched);
        });
      });
    });
  });
});
