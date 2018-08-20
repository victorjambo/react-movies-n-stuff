import { combineReducers } from 'redux';
import color from './colorReducer';
import movies from './movieReducer';

export default combineReducers({ color, movies });
