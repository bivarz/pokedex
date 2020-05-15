import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import Main from './pages/Main'
import Pokemon from './pages/Pokemon'
import Nav from './pages/Nav'

export default function Routes(){
  return(
    <Router>
        <Nav />
      <Switch>       
        <Route path="/" exact component={Main} />
        <Route path="/pokemon" component={Pokemon} />
      </Switch>
    </Router>
  );
}