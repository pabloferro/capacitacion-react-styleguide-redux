import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getVisibleTodos } from './constants';
import Layout from './layout';
import {
  toggleTodo
} from '../../../redux/todo/actions';

class TodoList extends Component {
  handleTodoClick = (id) => {
    this.props.dispatch(toggleTodo(id))
  }

  render() {
    return (
      <Layout
        todos={this.props.todos}
        onTodoClick={this.handleTodoClick}
      />
    );
  }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todo)
});

export default connect(mapStateToProps)(TodoList);
