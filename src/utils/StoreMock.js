import { createMock } from './DispatchMock';

export const emptyStore = () => ({
  getState() {
    return {};
  },
  subscribe() {
  },
});

export const createMockStore = (state = {}) => {
  const dispatchMock = createMock();

  return {
    getState() {
      return state;
    },
    subscribe() {

    },
    dispatch: dispatchMock.dispatch,
    getActions: dispatchMock.getActions,
    getAction: dispatchMock.getAction,
    isActionDispatched: dispatchMock.isActionDispatched,
    isActionTypeDispatched: dispatchMock.isActionTypeDispatched,
  };
};
