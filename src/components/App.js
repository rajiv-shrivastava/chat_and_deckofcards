import React from 'react'
import AddComment from '../containers/AddComment'
import VisibleCommentList from '../containers/VisibleCommentList'
import UndoRedo from '../containers/UndoRedo'

const App = () => (
  <div>
    <VisibleCommentList />
    <br />
        <AddComment />
<br />
    <UndoRedo />

  </div>
)

export default App

