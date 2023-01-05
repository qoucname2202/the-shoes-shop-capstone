const routes = {
  home: '/',
  profile: '/profile/@:nickname',
  detail: '/detail/:id',
  signin: '/signin',
  signup: '/signup',
  cart: '/cart',
  search: '/search',
  favourite: '/favourite',
  forgotPass: '/forgot-password',
  notFound: '*',
};

export default routes;
