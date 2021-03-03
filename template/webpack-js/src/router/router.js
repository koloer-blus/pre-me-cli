import loadable from '@loadable/component';
export const basename = '';

export const routes = [
  {
    path: '/',
    exact: true,
    component: loadable(() => import('@/pages/Home')),
    name: 'home',
    title: 'home',
  },
  {
    path: '/demo',
    exact: true,
    component: loadable(() => import('@/pages/Demo')),
    name: 'demo',
    title: 'demo',
  },
];
