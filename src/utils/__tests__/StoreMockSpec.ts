import * as DispatchMock from '../DispatchMock';
import { createMockStore, emptyStore } from '../StoreMock';

const dispatch = jest.fn();
const getActions = jest.fn();
const getAction = jest.fn();
const isActionDispatched = jest.fn();
const isActionTypeDispatched = jest.fn();

beforeEach(() => {
  jest.spyOn(DispatchMock, 'createMockDispatch').mockReturnValue({
    dispatch,
    getActions,
    getAction,
    isActionDispatched,
    isActionTypeDispatched,
  });
});

afterEach(() => {
  jest.resetAllMocks();
});

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
        const store = createMockStore({});
        store.dispatch({ type: '' });
        expect(dispatch).toHaveBeenCalled();
      });

      describe('getDispatchActions', () => {
        it('uses dispatchMock', () => {
          const store = createMockStore({});
          expect(store.getActions).toBe(getActions);
        });
      });

      describe('getDispatchAction', () => {
        it('uses dispatchMock', () => {
          const store = createMockStore({});
          expect(store.getAction).toBe(getAction);
        });
      });

      describe('isActionTypeDispatched', () => {
        it('uses dispatchMock', () => {
          const store = createMockStore({});
          expect(store.isActionTypeDispatched).toBe(isActionTypeDispatched);
        });
      });

      describe('isActionDispatched', () => {
        it('uses dispatchMock', () => {
          const store = createMockStore({});
          expect(store.isActionDispatched).toBe(isActionDispatched);
        });
      });
    });
  });
});
