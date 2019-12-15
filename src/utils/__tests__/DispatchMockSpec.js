import { createMockDispatch } from '../DispatchMock';

describe('DispatchMock', () => {
  describe('getActions', () => {
    it('returns all dispatched actions', () => {
      const mock = createMockDispatch();
      const action1 = 'action1';
      const action2 = 'action2';
      mock.dispatch(action1);
      mock.dispatch(action2);

      expect(mock.getActions()).toEqual([action1, action2]);
    });
  });

  describe('getAction', () => {
    describe('when action is not dispatched', () => {
      it('returns undefined', () => {
        const mock = createMockDispatch();
        expect(mock.getAction('action name')).toBe(undefined);
      });
    });

    describe('when action is dispatched', () => {
      it('is returned', () => {
        const mock = createMockDispatch();
        const type = 'action type';
        const action = {
          type,
        };
        mock.dispatch(action);
        expect(mock.getAction(type)).toEqual(action);
      });
    });

    describe('when an action creator returns a thunk', () => {
      it('executes the thunk', () => {
        const mock = createMockDispatch();
        const action = (dispatch) => {
          dispatch({ type: 'action type' });
          dispatch({ type: 'action type 2' });
        };

        mock.dispatch(action);
        expect(mock.isActionTypeDispatched('action type')).toBe(true);
        expect(mock.isActionTypeDispatched('action type 2')).toBe(true);
      });
    });

    describe('when several actions is dispatched', () => {
      it('returns action with given type', () => {
        const mock = createMockDispatch();
        const type = 'action type';
        const action = {
          type,
        };
        mock.dispatch({ type: 'random action 1' });
        mock.dispatch(action);
        mock.dispatch({ type: 'random action 2' });

        expect(mock.getAction(type)).toEqual(action);
      });
    });
  });

  describe('isActionTypeDispatched', () => {
    describe('when action has not been dispatched', () => {
      it('returns false', () => {
        const mock = createMockDispatch();
        expect(mock.isActionTypeDispatched('not dispatched action type')).toBe(false);
      });
    });

    describe('when actions has been dispatched', () => {
      it('returns true', () => {
        const mock = createMockDispatch();
        const type = 'action type';
        const action = {
          type,
        };
        mock.dispatch(action);
        expect(mock.isActionTypeDispatched(type)).toBe(true);
      });
    });
  });

  describe('isActionDispatched', () => {
    describe('when actions has not been dispatched', () => {
      it('returns false', () => {
        const mock = createMockDispatch();
        const action = {
          type: 'not dispatched action type',
        };
        expect(mock.isActionDispatched(action)).toBe(false);
      });
    });

    describe('when action has been dispatched', () => {
      describe('and all fields in action matches', () => {
        describe('when all subFields matches', () => {
          it('returns true', () => {
            const mock = createMockDispatch();
            const action = {
              type: 'type',
              field1: {
                subField1: 'subField1',
                subField2: 'subField2',
              },
              field2: 'field2',
            };
            const expectedAction = {
              type: 'type',
              field1: {
                subField1: 'subField1',
                subField2: 'subField2',
              },
              field2: 'field2',
            };
            mock.dispatch(action);
            expect(mock.isActionDispatched(expectedAction)).toBe(true);
          });
        });

        describe('when all subFields does not match', () => {
          it('returns false', () => {
            const mock = createMockDispatch();
            const action = {
              type: 'type',
              field1: {
                subField1: 'subField1',
                subField2: 'subField2',
              },
              field2: 'field2',
            };
            const expectedAction = {
              type: 'type',
              field1: {
                subField3: 'subField3',
              },
              field2: 'field2',
            };
            mock.dispatch(action);
            expect(mock.isActionDispatched(expectedAction)).toBe(false);
          });
        });
      });

      describe('and not all fields in action matches', () => {
        it('returns false', () => {
          const mock = createMockDispatch();
          const action = {
            type: 'type',
            field1: 'field1',
          };
          const notDispatchAction = {
            type: action.type,
            field1: `not ${action.field1}`,
          };
          mock.dispatch(action);
          expect(mock.isActionDispatched(notDispatchAction)).toBe(false);
        });
      });
    });
  });
});
