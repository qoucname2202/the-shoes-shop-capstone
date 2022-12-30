import React from 'react';
import config from '~/config';
const LayoutHome = React.lazy(() => import('~/containers/Home/pages/MainHome'));
const publicRoute = [
  {
    path: config.routes.home,
    component: LayoutHome,
  },
];

const privateRoute = [];

export { publicRoute, privateRoute };
