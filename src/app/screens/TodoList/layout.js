import React from 'react';
import PropTypes from 'prop-types';

import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import Filters from './components/Filters';

function TodoList({ todos, onTodoClick, onAddTodo }) {
  return (
    <div>
      <h1>To-do</h1>
      <ul>
        {
          todos.map(todo => (
            <Todo
              key={todo.id}
              {...todo}
              onClick={onTodoClick}
            />
          ))
        }
      </ul>
      <AddTodo onAddTodo={onAddTodo} />
      <Filters />
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  })),
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
