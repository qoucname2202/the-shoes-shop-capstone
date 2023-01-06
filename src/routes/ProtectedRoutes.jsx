import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { getStoreJson, USER_SIGNIN } from '~/services/Utils/config';

const userAuth = () => {
  const user = getStoreJson(USER_SIGNIN);
  return user && user.accessToken;
};

const ProtectedRoutes = () => {
  const isAuth = userAuth();
  return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoutes;
