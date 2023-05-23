// src/App.js
import React from 'react';
import createBrowserRouter from './router/index';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/detalle/:id', component: ProductDetail },
];

const RouterProvider = createBrowserRouter(routes);

const App = () => {
  return (
    <RouterProvider>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </RouterProvider>
  );
};

export default App;
