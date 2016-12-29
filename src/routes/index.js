import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Pages, ShowPage } from '../containers'
import {
  App,
  Home,
} from '../components'

const routes = (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <route path='pages'>
          <IndexRoute component={Pages} />
          <route path=':id' component={ShowPage} />
        </route>
      </Route>
    </Router>
)

export default routes