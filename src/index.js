import React, { Component } from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import './styles/app.scss'
import Root from './containers/Root'

 
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