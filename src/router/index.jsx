// src/router/router.js
import React, { useState, useEffect } from 'react';

const createBrowserRouter = (routes) => {
  const RouterProvider = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
      const handleRouteChange = () => {
        setCurrentPath(window.location.pathname);
      };

      window.addEventListener('popstate', handleRouteChange);

      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    }, []);

    const route = routes.find((route) => route.path === currentPath);

    return route ? <route.component /> : null;
  };

  return RouterProvider;
};

export default createBrowserRouter;
