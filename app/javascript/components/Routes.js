import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Airline from './Airline';
import Airlines from './Airlines';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Airlines} exact />
        <Route path="/airlines/:slug" component={Airline} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
