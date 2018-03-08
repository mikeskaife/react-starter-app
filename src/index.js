import 'babel-polyfill'; // transpiles some special ES6 functions that Babel cannot
import React from 'react';
import { render } from 'react-dom';
import { Switch } from 'react-router'; // remove?
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


render (
    <BrowserRouter>
      <App>
        { routes }
      </App>
    </BrowserRouter>,
  document.getElementById('app')
);
