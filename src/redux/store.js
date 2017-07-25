import { createStore, combineReducers , applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';

import todo from './todo/reducer';
import visibilityFilter from './visibilityFilter/reducer';

import arrLogic from './logic';

const logicMiddleware = createLogicMiddleware(arrLogic);

const reducers = combineReducers({
  todo,
  visibilityFilter
});

const store = createStore(
  reducers,
  applyMiddleware(logicMiddleware)
);

export default store;
