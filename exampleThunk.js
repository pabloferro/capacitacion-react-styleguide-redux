// actions

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
