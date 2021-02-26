import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { authRoutes, publicRoutes } from './routes';

import NotFoundPage from '../../pages/not-found-page';

const AppRouter: React.FC = () => {
  const isAuth = true;

  const aRoutes = authRoutes.map(({ path, Component }) => {
    return <Route key={path} path={path} component={Component} exact />;
  });

  const pRoutes = publicRoutes.map(({ path, Component }) => {
    return <Route key={path} path={path} component={Component} exact />;
  });

  return (
    <Switch>
      {isAuth && aRoutes}
      {pRoutes}
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default AppRouter;
