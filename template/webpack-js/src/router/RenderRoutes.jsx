import React from 'react';
import { Switch } from 'react-router-dom';
import { RouteWithSubRoutes } from './RouteWithSubRoutes';

export const RenderRoutes = (routes) => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
};