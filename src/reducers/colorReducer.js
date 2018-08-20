import { GET_COLOR } from '../actions/constants';

const defaultState = {
  color: '73e298'
};

const colorReducers = (state = defaultState, action) => {
  switch (action.type) {
  case GET_COLOR:
    return {
      ...state,
      color: action.color
    };
  default:
    return state;
  }
};

export default colorReducers;
