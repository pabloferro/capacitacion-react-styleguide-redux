import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from './layout';
import { addTodo } from '../../../../../redux/todo/actions';

class AddTodo extends Component {
  handleAddTodo = (text) => {
    this.props.dispatch(addTodo(text))
  }

  render() {
    return (<Layout onAddTodo={this.handleAddTodo} />);
  }
}

export default connect()(AddTodo);
