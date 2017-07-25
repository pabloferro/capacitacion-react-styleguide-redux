import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
  handleClick = () => {
    this.props.onClick(this.props.id)
  }

  render() {
    const { completed, text } = this.props;

    return (
      <li
        onClick={this.handleClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        {text}
      </li>
    );
  }
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Todo;
