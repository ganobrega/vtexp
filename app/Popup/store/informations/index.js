import { SET_DATA } from './types';

export default function (
  state = {
    data: [],
  },
  action,
) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
