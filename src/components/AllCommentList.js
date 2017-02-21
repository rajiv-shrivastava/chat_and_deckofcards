import React, { PropTypes } from 'react'
import Comment from './Comment'

const AllCommentList = ({ comments, onTodoClick }) => (
  <ul>
    {comments.map(a_comment =>
      <Comment
        key={a_comment.id}
        {...a_comment}
        onClick={() => onTodoClick(a_comment.id)}
      />
    )}
  </ul>
)

AllCommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default AllCommentList
