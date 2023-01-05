const routes = {
  home: '/',
  profile: '/profile/@:nickname',
  detail: '/detail/:id',
  signin: '/signin',
  signup: '/signup',
  cart: '/cart',
  forgotPass: '/forgot-password',
  notFound: '*',
};

export default routes;
