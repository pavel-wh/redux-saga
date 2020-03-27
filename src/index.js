import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import {forbiddenWordMiddleware} from './redux/middleware'
import {sagaWatcher} from './redux/sagas'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {rootReducer} from './redux/rootReducer'

const saga = createSagaMiddleware()

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, logger, forbiddenWordMiddleware, saga),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

saga.run(sagaWatcher)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
