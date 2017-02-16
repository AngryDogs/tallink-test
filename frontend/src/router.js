import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import LandingPage from './pages/LandingPage';
import SingleRoomPage from './pages/SingleRoomPage';
import SingleConferencePage from './pages/SingleConfrencePage';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={LandingPage} />
    <Route path="/room/:id" component={SingleRoomPage} />
    <Route path="/conference/:id" component={SingleConferencePage} />
  </Router>
)
