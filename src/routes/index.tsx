import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LazyLoading, ProtectedRoute } from 'components';
import AdminLayout from 'layout';
import PageNotFound from 'pages/PageNotFound';
import routerList from './routes';

const AppRoutes = () => {
  return (
    <Suspense fallback={<LazyLoading />}>
      <Routes>
        {/* <Route path="/" element={<Navigate replace to={PATH.HOME} />} /> */}

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<AdminLayout />}>
            {routerList.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
