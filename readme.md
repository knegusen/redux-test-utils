# redux-test-utils

Test utils to be able to easier test containers in redux.

## Install

In the terminal execute the following command:

```
$ npm install redux-test-utils --save-dev
```

## How to use

```js

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

```