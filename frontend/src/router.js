import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import LandingPage from './pages/LandingPage'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={LandingPage}>
    </Route>
  </Router>
)
