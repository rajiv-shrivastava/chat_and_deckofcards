import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import AllCommentList from '../components/AllCommentList'

const getVisibleComments = (comments, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return comments
    
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  comments: getVisibleComments(state.comments.present, state.visibilityFilter)
})

const mapDispatchToProps = ({
  onTodoClick: toggleTodo
})

const VisibleCommentList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCommentList)

export default VisibleCommentList
