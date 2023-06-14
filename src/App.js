import { useState, useEffect } from 'react';
import Store from './components/Store';
import Shop from './components/Shop';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route exact path="/" component={props => <Store />} />
        <Route exact path="/shop" component={props => <Shop/>} />
        <Route>404 Not Found</Route>
      </Switch>
    </Router>
  );
}

export default App;
