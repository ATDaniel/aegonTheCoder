import { SET_GEAR } from '../actions/gear';

const initialState = {
  gearList: [],
}

export const gear = (state = initialState, action) => {
  switch (action.type) {
    case SET_GEAR: {
      return {
        ...state,
        gearList: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}

