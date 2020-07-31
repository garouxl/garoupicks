import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import RegisterVideo from './pages/register/Video';
import RegisterCategory from './pages/register/Category';
import Error404 from './pages/Error404';

import './reset.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={RegisterVideo} />
      <Route path="/cadastro/categoria" component={RegisterCategory} />
      <Route component={Error404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
