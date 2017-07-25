export const SET_VISIBILITY_FILTER = 'visibilityFilter/SET_VISIBILITY_FILTER';

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: {
      filter
    }
  }
}
