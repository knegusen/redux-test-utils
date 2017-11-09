# redux-test-utils [![Build Status](https://travis-ci.org/knegusen/redux-test-utils.svg?branch=master)](https://travis-ci.org/knegusen/redux-test-utils)

Test utils to simplify testing of containers in redux.

## Install

In the terminal execute the following command:

```
$ npm install redux-test-utils --save-dev
```

## How to use

### createMockStore

```js

import { createMockStore } from 'redux-test-utils';

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

### createMockDispatch

```js

import { createMockDispatch } from 'redux-test-utils';

describe('example', () => {
  it('works', () => {
    const state = 'state';
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

```