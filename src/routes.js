import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
  <Switch>
    <Route exact path="/about" component={AboutPage} />
    <Route exact path="/" component={HomePage} />
  </Switch>
);
