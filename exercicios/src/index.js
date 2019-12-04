import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import Counter from './components/counter-redux/counter';
import counterReducer from './components/counter-redux/counterReducer';

const reducers = combineReducers({
  counter: counterReducer
})

ReactDom.render(
  <Provider store={createStore(reducers)}>
    <Counter/>
  </Provider>
, document.getElementById('root'))