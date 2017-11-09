/* eslint-disable import/prefer-default-export */
import equals from './equals';

export const createMockDispatch = () => {
  const actions = [];
  return {
    dispatch(action) {
      actions.push(action);
    },

    getActions() {
      return actions;
    },

    getAction(type) {
      for (let i = 0; i < actions.length; i += 1) {
        if (actions[i].type === type) {
          return actions[i];
        }
      }
      return undefined;
    },

    isActionTypeDispatched(type) {
      for (let i = 0; i < actions.length; i += 1) {
        if (actions[i].type === type) {
          return true;
        }
      }
      return false;
    },

    isActionDispatched(action) {
      for (let i = 0; i < actions.length; i += 1) {
        if (actions[i].type === action.type) {
          if (equals(actions[i], action)) {
            return true;
          }
        }
      }
      return false;
    },
  };
};
