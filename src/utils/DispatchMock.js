/* eslint-disable import/prefer-default-export */
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
          let equalActions = true;
          Object.keys(action).forEach((key) => {
            if (actions[i][key] !== action[key]) {
              equalActions = false;
            }
          });
          if (equalActions) {
            return true;
          }
        }
      }
      return false;
    },
  };
};
