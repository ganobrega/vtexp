import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './reducers';

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
