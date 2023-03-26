import { LOGIN } from '../actions/auth';

const initialState = {
  isAdmin: false,
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
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