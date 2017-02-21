let nextTodoId = 0
export const addTodo = (text,name) => ({
  type: 'ADD_COMMENT',
  id: nextTodoId++,
  text,
  name
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

