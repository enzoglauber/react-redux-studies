import React from 'react'
import ReactDOM from 'react-dom'

import ClassComponent from './classComponent'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

const reducers = combineReducers({
  field: () => ({ value: 'opa' })
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <ClassComponent value='Componente Classe' />
  </Provider>
, document.getElementById('app'))