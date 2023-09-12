import { SET_LOGIN } from '../actions/auth';

const initialState = {
  isAdmin: false,
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN: {
      return {
        ...state,
        isAdmin: true,
      }
    }
    default: {
      return state;
    }
  }
}