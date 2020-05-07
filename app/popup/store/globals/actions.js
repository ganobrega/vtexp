import { SET_ERROR, SET_LOADING, SET_ACCOUNT } from './types';

export const setError = (log) => ({
  type: SET_ERROR,
  payload: log,
});

export const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value,
});

export const setAccount = (value) => ({
  type: SET_ACCOUNT,
  payload: value,
});
