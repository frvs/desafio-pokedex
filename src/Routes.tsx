import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Details from './views/pages/Details';
import Home from './views/pages/Home';
import NotFound from './views/pages/NotFound';

const Routes = (): JSX.Element => {
  return (
    <div>
      <Switch>
        <Route path="/pokemon/:id">
          <Details />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </div>
  );
};

export default Routes;
