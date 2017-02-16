import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import LandingPage from './pages/LandingPage';
import SingleRoomPage from './pages/SingleRoomPage';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={LandingPage} />
    <Route path="/room/:id" component={SingleRoomPage} />
  </Router>
)
