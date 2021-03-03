import loadable from '@loadable/component';
import { RouteInterface } from '@/types/route';
export const basename = '';

export const routes: RouteInterface[] = [
  {
    path: '/',
    exact: true,
    component: loadable(() => import('@/pages/Home')),
    name: 'Home',
    title: 'home',
  },
  {
    path: '/demo',
    exact: true,
    component: loadable(() => import('@/pages/Demo')),
    name: 'Demo',
    title: 'demo',
  },
];
