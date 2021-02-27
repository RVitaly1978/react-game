import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { authRoutes, publicRoutes } from './routes';
import { useTypedSelector } from '../hooks';

import NotFoundPage from '../../pages/not-found-page';

const AppRouter: React.FC = () => {
  const isAuth = useTypedSelector(s => s.auth.isAuth);

  const aRoutes = authRoutes.map(({ path, Component }) => {
    return <Route key={path} path={path} component={Component} exact />;
  });

  const pRoutes = publicRoutes.map(({ path, Component }) => {
    return <Route key={path} path={path} component={Component} exact />;
  });

  return (
    <Switch>
      {isAuth ? aRoutes : pRoutes}
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default AppRouter;
