import { combineReducers } from 'redux';

const defaultState = {
  user: {},
  isSignIn: false
};

const user = (state = defaultState, action) => {
  if (action.type === 'SIGN_IN') {
    return { ...state, user: action.payload, isSignIn: true };
  }
  if (action.type === 'SIGN_OUT') {
    return { ...state, user: null, isSignIn: false };
  }
  return state;
};

const reducer = combineReducers({
  user
});

export default reducer;
