import { SET_DATA } from './types';

export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});
