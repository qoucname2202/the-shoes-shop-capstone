import React from 'react';
import config from '~/config';
const LayoutHome = React.lazy(() => import('~/containers/Home/pages/MainHome'));
const LayoutNotFound = React.lazy(() => import('~/components/NotFound'));
const LayoutSignIn = React.lazy(() => import('~/containers/Auth/pages/SignIn'));
const LayoutSignUp = React.lazy(() => import('~/containers/Auth/pages/SignUp'));
const LayoutForgotPass = React.lazy(() => import('~/containers/Auth/pages/ForgotPassword'));
const LayoutDetailProd = React.lazy(() => import('~/containers/Detail/pages/MainDetail'));
const LayoutCart = React.lazy(() => import('~/containers/Cart/pages/MainCart'));
const LayoutProfile = React.lazy(() => import('~/containers/Profile/pages/ProfileMain'));
const LayoutSearch = React.lazy(() => import('~/containers/Search/page/MainSearch'));
const LayoutFavouriteProd = React.lazy(() => import('~/containers/Favourite/pages/MainFavourite'));
const publicRoute = [
  {
    path: config.routes.home,
    component: LayoutHome,
  },
  {
    path: config.routes.signin,
    component: LayoutSignIn,
  },
  {
    path: config.routes.signup,
    component: LayoutSignUp,
  },
  {
    path: config.routes.detail,
    component: LayoutDetailProd,
  },
  {
    path: config.routes.search,
    component: LayoutSearch,
  },
  {
    path: config.routes.notFound,
    component: LayoutNotFound,
    layout: null,
  },
];

const privateRoute = [
  {
    path: config.routes.profile,
    component: LayoutProfile,
  },
  {
    path: config.routes.cart,
    component: LayoutCart,
  },
  {
    path: config.routes.favourite,
    component: LayoutFavouriteProd,
  },
  {
    path: config.routes.forgotPass,
    component: LayoutForgotPass,
  },
];

export { publicRoute, privateRoute };
