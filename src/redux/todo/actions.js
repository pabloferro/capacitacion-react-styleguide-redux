import TodoService from '../../services/TodoService';

export const ADD_TODO = 'todo/ADD_TODO';
export const TOGGLE_TODO = 'todo/TOGGLE_TODO';
export const FETCH_TODOS = 'todo/FETCH_TODOS';
export const FETCH_TODOS_SUCCESS = 'todo/FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'todo/FETCH_TODOS_FAILURE';

let nextTodoId = 10;
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoId++,
      text
    }
  };
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  };
}

export const fetchTodos = () => {
  return {
    type: FETCH_TODOS,
  };
}

export const fetchTodosSuccess = (items) => {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: {
      items
    }
  };
}

export const fetchTodosFailure = (error) => {
  return {
    type: FETCH_TODOS_FAILURE,
    payload: {
      error
    }
  };
}
