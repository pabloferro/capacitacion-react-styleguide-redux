import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getVisibleTodos } from './constants';
import Layout from './layout';
import {
  fetchTodos,
  toggleTodo
} from '../../../redux/todo/actions';

class TodoList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTodos());
  }

  handleTodoClick = (id) => {
    this.props.dispatch(toggleTodo(id))
  }

  render() {
    return (
      <Layout
        todos={this.props.todos}
        loading={this.props.loading}
        onTodoClick={this.handleTodoClick}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todo.items, state.visibilityFilter),
  loading: state.todo.loading
});

export default connect(mapStateToProps)(TodoList);
