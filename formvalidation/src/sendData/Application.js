
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './Details';
import UserForm from './UseForm';
import history  from '../history';

const Application = () => (
  <BrowserRouter history={history}>
    <div className="container">
      <Switch>
        <Route component={UserForm} path="/data" exact={true}/>
        <Route path="/details" component={Details} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Application;