import React from 'react';
import config from '~/config';
const LayoutHome = React.lazy(() => import('~/containers/Home/pages/MainHome'));
const LayoutNotFound = React.lazy(() => import('~/components/NotFound'));
const publicRoute = [
  {
    path: config.routes.home,
    component: LayoutHome,
  },
  {
    path: config.routes.notFound,
    component: LayoutNotFound,
    layout: null,
  },
];

const privateRoute = [];

export { publicRoute, privateRoute };
