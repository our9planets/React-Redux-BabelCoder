import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import { routerMiddleware } from 'react-router-redux'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

export default (history) => {
    const middlewares = [thunk, apiMiddleware, routerMiddleware(history)]
    if(process.env.NODE_ENV !== 'production')
        middlewares.push(createLogger())

    const store = createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    )

    
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}