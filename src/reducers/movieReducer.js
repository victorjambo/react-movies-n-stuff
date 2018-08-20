import {
  GET_MOVIES, GET_SHOWS, GET_GROSSING, GET_ALL_MOVIES
} from '../actions/constants';

const defaultState = {
  movies: [], shows: [], grossing: [], allMovies: []
};

const movieReducers = (state = defaultState, action) => {
  switch (action.type) {
  case GET_MOVIES:
    return {
      ...state,
      movies: action.movies
    };
  case GET_SHOWS:
    return {
      ...state,
      shows: action.shows
    };
  case GET_GROSSING:
    return {
      ...state,
      grossing: action.grossing
    };
  case GET_ALL_MOVIES:
    return {
      ...state,
      allMovies: action.allMovies
    };
  default:
    return state;
  }
};

export default movieReducers;
