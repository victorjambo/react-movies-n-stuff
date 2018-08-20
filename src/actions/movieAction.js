import axios from 'axios';
import {
  GET_MOVIES, GET_SHOWS, GET_GROSSING, GET_ALL_MOVIES
} from './constants';
import { movies, shows, grossing } from '../mock';

export const getMovies = () => ({
  type: GET_MOVIES,
  movies
});

export const fetchMovies = () => dispatch => dispatch(getMovies());

export const getShows = () => ({
  type: GET_SHOWS,
  shows
});

export const fetchShows = () => dispatch => dispatch(getShows());

export const getGrossing = () => ({
  type: GET_GROSSING,
  grossing
});

export const fetchGrossing = () => dispatch => dispatch(getGrossing());

export const getAllMovies = allMovies => ({
  type: GET_ALL_MOVIES,
  allMovies
});

export const fetchAllMovies = () => dispatch => axios
  .get('https://yts.am/api/v2/list_movies.json')
  .then((response) => {
    dispatch(getAllMovies(response.data.data.movies));
  }).catch((error) => {
    console.log(error);
  });
