import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { RouteInterface } from '@/types/route';

export const RouteWithSubRoutes = (
  route: RouteInterface,
  index: number,
) => {
  return (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      render={(props: RouteComponentProps) => <route.component {...props} routes={route.routes} />}
    />
  );
};
