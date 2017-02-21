import React from 'react'
import Footer from './Footer'
import AddComment from '../containers/AddComment'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'

const App = () => (
  <div>
    <VisibleTodoList />
    <Footer />
    <br />
        <AddComment />
<br />
    <UndoRedo />

  </div>
)

export default App
