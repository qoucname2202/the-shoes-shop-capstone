import React, { Fragment } from 'react';
import { privateRoute, publicRoute } from './routes';
import HomeTemplate from '~/template/HomeTemplate';
import Loading from '~/components/Loading/Loading';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './routes/ProtectedRoutes';

const App = () => {
  return (
    <div className="app">
      <Routes>
        {publicRoute.map((route, idx) => {
          const Layout = route.layout === null ? Fragment : HomeTemplate;
          const Page = route.component;
          return (
            <Route
              key={idx}
              path={route.path}
              element={
                <React.Suspense fallback={<Loading />}>
                  <Layout>
                    <React.Suspense fallback={<Loading />}>
                      <Page />
                    </React.Suspense>
                  </Layout>
                </React.Suspense>
              }
            ></Route>
          );
        })}
        <Route element={<ProtectedRoutes />}>
          {privateRoute.map((route, idx) => {
            const Layout = route.layout === null ? Fragment : HomeTemplate;
            const Page = route.component;
            return (
              <Route
                key={idx}
                path={route.path}
                element={
                  <React.Suspense fallback={<Loading />}>
                    <Layout>
                      <React.Suspense fallback={<Loading />}>
                        <Page />
                      </React.Suspense>
                    </Layout>
                  </React.Suspense>
                }
              ></Route>
            );
          })}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
