import { createStore } from 'redux'
import rootReducer from '../reducers'

export default () => {
    const initialState = {
        pages:[
            {
                "id": 1,
                "title": "test page#1",
                "content": "TEST PAGE CONTENT"
            }, {
                "id": 2,
                "title": "test page#2",
                "content": "TEST PAGE CONTENT"
            }
        ]
    }
    const store = createStore(rootReducer)
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}