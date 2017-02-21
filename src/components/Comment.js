import React, { PropTypes } from 'react'

const Comment = ({ onClick, completed, text,name }) => (
  <li className="well"
    onClick={onClick}
    >
    {text} {name}
  </li>
)

Comment.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Comment
