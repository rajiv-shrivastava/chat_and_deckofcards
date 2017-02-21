import React, { PropTypes } from 'react'
var moment = require('moment');

const Comment = ({ onClick, completed, text, name }) => (
  <li className="well"
    onClick={onClick}
    ><span>
    {text}
    <div className="pull-right" >By User ~ {name} 
    <br/>
    Commented at: {Date()}
    </div>
    </span>
  </li>
)

Comment.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Comment
