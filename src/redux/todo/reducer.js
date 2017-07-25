import Immutable from 'seamless-immutable';

import {
  ADD_TODO,
  TOGGLE_TODO
} from './actions';

const initialState = [];

const todosReducer = (state = Immutable(initialState), action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      );
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.payload.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}

export default todosReducer;
