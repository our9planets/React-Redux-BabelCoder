import React from 'react'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { 
    Pages, 
    ShowPage, 
    NewPage 
} from '../containers'
import {
    App,
    Home,
} from '../components'

const routes = (store, history) => (
    <Router history={syncHistoryWithStore(history, store)}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='pages'>
                <IndexRoute component={Pages} />
                <route path='new' component={NewPage} />
                <route path=':id' component={ShowPage} />
            </Route>
        </Route>
    </Router>
)

export default routes