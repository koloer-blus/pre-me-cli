import React from 'react';
import { Switch } from 'react-router-dom';
import { RouteInterface } from 'types/route';
import { RouteWithSubRoutes } from './RouteWithSubRoutes';

export const RenderRoutes = (routes: RouteInterface[]) => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
};
