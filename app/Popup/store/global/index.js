import { SET_ERROR, SET_LOADING } from './types';

export default function (
  state = {
    loading: true,
  },
  action,
) {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
