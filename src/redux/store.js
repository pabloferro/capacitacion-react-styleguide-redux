import { createStore, combineReducers , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import todo from './todo/reducer';
import visibilityFilter from './visibilityFilter/reducer';

const reducers = combineReducers({
  todo,
  visibilityFilter
});

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export default store;
