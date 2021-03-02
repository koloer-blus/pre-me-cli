import { RouteComponentProps } from 'react-router-dom';

export interface RouteInterface {
  path: string;
  component: any;
  routes?: RouteInterface[];
  exact?: boolean;
  title?: string;
  name?: string;
}

export interface RoutesInterface {
  routes?: RouteInterface[];
}

export type RouteProps = RouteComponentProps<any> & RoutesInterface
