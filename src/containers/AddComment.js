import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddComment = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
      <div className="col-sm-10">
        <input ref={node => {
          input = node
        }} className="form-control" />
       </div>
        <span class="col-sm-2" > </span>
        <button type="submit" className="btn btn-primary">
          Add Your Comment
        </button>
      </form>
    </div>
  )
}
AddComment = connect()(AddComment)

export default AddComment
