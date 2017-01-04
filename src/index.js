import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import './styles/app.scss'
import Root from './containers/Root'
import rootReducer from './reducers'
import route from './routes'

// const preloadedState = {
//     pages:[
//         {
//             "id": 1,
//             "title": "test page#1",
//             "content": "TEST PAGE CONTENT"
//         }, {
//             "id": 2,
//             "title": "test page#2",
//             "content": "TEST PAGE CONTENT"
//         }
//     ]
// }

// const store = createStore(rootReducer, preloadedState)
// render(
//     <Provider store={store}>
//         {route}
//     </Provider>, 
//     document.getElementById('react-root')
// )

render(
    <AppContainer>
        <Root />
    </AppContainer>, 
    document.getElementById('react-root')
)

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const NextRootApp = require('./containers/Root').default
        render(
            <AppContainer>
                <NextRootApp />
            </AppContainer>,
            document.getElementById('react-root')
        )
    })
}