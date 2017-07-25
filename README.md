
## Capacitación React styleguide

### Redux thunk
```js
  export const fetchTodos = () => {
    return dispatch => {
      dispatch(fetchingTodos());
      TodoService.getTodos().then(response => {
        dispatch(fetchTodosSuccess(response.data));
      }).catch(error => {
        dispatch(fetchTodosFailure(error));
      });
    }
  }
```

### Redux logic
```js
  const fetchTodosLogic = createLogic({
    type: FETCH_TODOS, // only apply this logic to this type
    cancelType: 'CANCEL_FETCH_TODOS', // cancel on this type
    latest: true, // only take latest
    process({ getState, action }, dispatch, done) {
      api.get('/todos')
        .then(response => dispatch(fetchTodosSuccess(response.data)))
        .catch(error => dispatch(fetchTodosFailure(error)))
        .then(() => done());
    }
  });
```
