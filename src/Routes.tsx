import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Details from './views/pages/Details';
import Home from './views/pages/Home';

const Routes = (): JSX.Element => {
  return (
    <div>
      <Switch>
        <Route path="/pokemon/:id">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
