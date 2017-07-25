import React, { Component } from 'react';

import TodoList from './app/screens/TodoList';

class App extends Component {
  render() {
    return (
      <div style={{ marginLeft: 40 }} >
        <TodoList />
      </div>
    );
  }
}

export default App;
