import deepEqual from 'fast-deep-equal';
import { AnyAction, Dispatch } from 'redux';

export interface MockDispatch<T extends AnyAction> {
  dispatch: Dispatch<T>;
  getActions: () => AnyAction[];
  getAction: (type: any) => AnyAction | undefined;
  isActionTypeDispatched: (type: any) => boolean;
  isActionDispatched: (action: AnyAction) => boolean;
}

export const createMockDispatch = <T extends AnyAction>(): MockDispatch<T> => {
  const actions: AnyAction[] = [];
  return {
    dispatch<A extends T>(action: A): A {
      actions.push(action);
      return action;
    },

    getActions(): AnyAction[] {
      return actions;
    },

    getAction(type): AnyAction | undefined {
      for (let i = 0; i < actions.length; i += 1) {
        if (actions[i].type === type) {
          return actions[i];
        }
      }
      return undefined;
    },

    isActionTypeDispatched(type): boolean {
      for (let i = 0; i < actions.length; i += 1) {
        if (actions[i].type === type) {
          return true;
        }
      }
      return false;
    },

    isActionDispatched(action): boolean {
      for (let i = 0; i < actions.length; i += 1) {
        if (actions[i].type === action.type) {
          if (deepEqual(actions[i], action)) {
            return true;
          }
        }
      }
      return false;
    },
  };
};
