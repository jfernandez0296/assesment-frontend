import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import About from './components/About';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail/:id" component={ProductDetail} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
