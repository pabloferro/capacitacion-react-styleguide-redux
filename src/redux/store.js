import { createStore, combineReducers } from 'redux';

import todo from './todo/reducer';
import visibilityFilter from './visibilityFilter/reducer';

const reducers = combineReducers({
  todo,
  visibilityFilter
});

const store = createStore(reducers)

export default store;
