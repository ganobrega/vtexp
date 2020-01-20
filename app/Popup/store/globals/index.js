import { SET_ERROR, SET_LOADING, SET_ACCOUNT } from './types';

export default function (
  state = {
    loading: true,
    account: ''
  },
  action,
) {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ACCOUNT:
      return { ...state, account: action.payload };
    default:
      return state;
  }
}
