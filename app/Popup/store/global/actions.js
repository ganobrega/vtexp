import { SET_ERROR, SET_LOADING } from './types';

export const setError = (log) => ({
  type: SET_ERROR,
  payload: log,
});

export const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value,
});
