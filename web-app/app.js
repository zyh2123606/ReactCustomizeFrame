import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import logger from 'redux-logger'
import * as Reducers  from './Reducers'
import Entry from './entry'
import '../global.less'

const reducer = combineReducers({
    ...Reducers,
    routing: routerReducer,
    form: formReducer
});

const finalCreateStore = compose(applyMiddleware(thunkMiddleware, logger))(createStore)
const store = finalCreateStore(reducer)
ReactDOM.render(
    <Provider store={store}>
        <Entry />
    </Provider>,
    document.getElementById('app')
)
