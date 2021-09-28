import React from'react';
import RegistrationForm from'./components/RegistrationForm';
import Application from './sendData/Application';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 import history from './history';
import'./App.css';
function App() {
  return (
<BrowserRouter history={history}>
    <div className="container">
      <Switch>

          <Route exact path="/" component={RegistrationForm} />
        <Route path="/data" component={Application} />
          </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
