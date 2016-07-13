import { createMockStore } from "../index";
import * as StoreMock from "../utils/StoreMock";

describe('createStore', () => {
  it('works', () => {
    spyOn(StoreMock, 'createMockStore');
    var state = 'state';
    createMockStore(state);
    expect(StoreMock.createMockStore).toHaveBeenCalledWith(state);
  });
});
