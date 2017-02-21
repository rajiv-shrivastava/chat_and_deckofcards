import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
  <li className="well"
    onClick={onClick}
    >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
