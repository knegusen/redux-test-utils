import { createMockStore } from "../index";
import * as StoreMock from "../utils/StoreMock";

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
        data: 'data'
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
