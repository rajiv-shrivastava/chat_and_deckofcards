import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import Cards from './components/Cards'
import Spades from './components/Spades'

import reducer from './reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <Cards />
  </Provider>,
  document.getElementById('root')
  )
