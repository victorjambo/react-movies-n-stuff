import axios from 'axios';
import { GET_COLOR, RES_ERROR } from './constants';

export const getColor = color => ({
  type: GET_COLOR,
  color
});

export const responseError = color => ({
  type: RES_ERROR,
  color
});

export const loadColor = () => dispatch => axios
  .get('http://www.colr.org/json/color/random')
  .then((response) => {
    dispatch(getColor(response.data.new_color));
  }).catch((error) => {
    dispatch(responseError(error));
  });
