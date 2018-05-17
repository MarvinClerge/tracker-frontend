import React from 'react';
import ReactDOM from 'react-dom';

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducers/root'
const store = createStore(rootReducer, applyMiddleware(thunk))

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
