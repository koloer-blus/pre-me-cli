import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { RouteInterface } from '@/types/route';

export const RouteWithSubRoutes = (
  route: RouteInterface,
) => {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
};
