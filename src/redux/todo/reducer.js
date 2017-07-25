import Immutable from 'seamless-immutable';

import {
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from './actions';

const initialState = {
  items: null,
  error: null,
  loading: true,
};

const todosReducer = (state = Immutable(initialState), action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return state.merge({
        loading: true
      })
    case FETCH_TODOS_SUCCESS:
      return state.merge({
        items: action.payload.items,
        loading: false
      })
    case FETCH_TODOS_FAILURE:
      return state.merge({
        error: action.payload.error,
        loading: false
      })
    case ADD_TODO:
      return state.merge({
        items: state.items.concat({
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        })
      })
    case TOGGLE_TODO:
      return state.merge({
        items: state.items.map(todo =>
          (todo.id === action.payload.id)
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      })
    default:
      return state
  }
}

export default todosReducer;
