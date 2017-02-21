import undoable from 'redux-undo'

const comment = (state, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_COMMENT':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        comment(undefined, action)
      ]
    case 'TOGGLE_COMMENT':
      return state.map(t =>
        comment(t, action)
      )
    default:
      return state
  }
}

const undoableTodos = undoable(comments)

export default undoableTodos
