import React from 'react';
import createHistory from 'history/createBrowserHistory';
import ReactDOM from 'react-dom';
import { Route, Switch, Router } from 'react-router-dom';
import './index.css'



import { App } from './components';



ReactDOM.render(
  <Router history={createHistory()}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
  </Router>,
  document.getElementById('root'),
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
