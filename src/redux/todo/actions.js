export const ADD_TODO = 'todo/ADD_TODO';
export const TOGGLE_TODO = 'todo/TOGGLE_TODO';

let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoId++,
      text
    }
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  }
}
