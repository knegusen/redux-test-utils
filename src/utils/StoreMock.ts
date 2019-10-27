import { AnyAction, Store, Unsubscribe } from 'redux';
import { createMockDispatch, MockDispatch } from './DispatchMock';

export interface MockStore<S, T extends AnyAction>
  extends Omit<Store<S, T>, 'Symbol.observable'>,
    MockDispatch<T> {}

const isFunction = (arg: any): boolean => typeof arg === 'function';

export const emptyStore = (): Omit<Store<{}, AnyAction>, 'Symbol.observable'> => ({
  dispatch<A extends AnyAction>(action: A): A {
    return action;
  },
  getState(): {} {
    return {};
  },
  subscribe(): () => void {
    return (): void => {};
  },
  replaceReducer(): void {
    // Dummy
  },
});

export const createMockStore = <S, T extends AnyAction>(state: S): MockStore<S, T> => {
  const dispatchMock = createMockDispatch<T>();
  const subscribers: (() => void)[] = [];

  return {
    getState(): S {
      return state;
    },
    replaceReducer(): void {
      // Do nothing since it is not needed in tests
    },
    subscribe(subscriber: () => void): Unsubscribe {
      if (isFunction(subscriber)) {
        subscribers.push(subscriber);
      }
      return subscriber;
    },
    dispatch: <A extends T>(action: A): A => {
      for (let i = 0; i < subscribers.length; i++) {
        subscribers[i]();
      }
      return dispatchMock.dispatch(action);
    },
    getActions: dispatchMock.getActions,
    getAction: dispatchMock.getAction,
    isActionDispatched: dispatchMock.isActionDispatched,
    isActionTypeDispatched: dispatchMock.isActionTypeDispatched,
  };
};
