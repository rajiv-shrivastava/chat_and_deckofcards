let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_COMMENT',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_COMMENT',
  id
})
