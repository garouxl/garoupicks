import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import registerVideo from './pages/register/Video'
import registerCategory from './pages/register/Category';
import Error404 from './pages/Error404';

import './reset.css';

//TODO: faser um comp pra 404
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={registerVideo} />
      <Route path="/cadastro/categoria" component={registerCategory} />
      <Route component={Error404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
