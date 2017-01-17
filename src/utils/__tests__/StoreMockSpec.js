import { emptyStore, createMockStore } from '../StoreMock';
import * as DispatchMock from '../DispatchMock';

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
          expect(createMockStore().getState()).toEqual({});
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
      it('is defined', () => {
        expect(typeof createMockStore().subscribe).toBe('function');
      });
    });

    describe('dispatch', () => {
      it('uses dispatchMock', () => {
        const dispatch = 'dispatch function';
        spyOn(DispatchMock, 'createMockDispatch').and.returnValue({ dispatch });
        const store = createMockStore();
        expect(store.dispatch).toBe(dispatch);
      });

      describe('getDispatchActions', () => {
        it('uses dispatchMock', () => {
          const getActions = 'getActions function';
          spyOn(DispatchMock, 'createMockDispatch').and.returnValue({ getActions });
          const store = createMockStore();
          expect(store.getActions).toBe(getActions);
        });
      });

      describe('getDispatchAction', () => {
        it('uses dispatchMock', () => {
          const getAction = 'getAction function';
          spyOn(DispatchMock, 'createMockDispatch').and.returnValue({ getAction });
          const store = createMockStore();
          expect(store.getAction).toBe(getAction);
        });
      });

      describe('isActionTypeDispatched', () => {
        it('uses dispatchMock', () => {
          const isActionTypeDispatched = 'isActionTypeDispatched function';
          spyOn(DispatchMock, 'createMockDispatch').and.returnValue({ isActionTypeDispatched });
          const store = createMockStore();
          expect(store.isActionTypeDispatched).toBe(isActionTypeDispatched);
        });
      });

      describe('isActionDispatched', () => {
        it('uses dispatchMock', () => {
          const isActionDispatched = 'isActionTypeDispatched function';
          spyOn(DispatchMock, 'createMockDispatch').and.returnValue({ isActionDispatched });
          const store = createMockStore();
          expect(store.isActionDispatched).toBe(isActionDispatched);
        });
      });
    });
  });
});
