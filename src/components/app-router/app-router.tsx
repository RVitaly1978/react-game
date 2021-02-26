import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { authRoutes, publicRoutes } from './routes';
import { useTypedSelector } from '../hooks';
import { LOGIN_ROUTE } from '../../utils/constants';

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
      {isAuth && aRoutes}
      {pRoutes}
      <Redirect to={LOGIN_ROUTE} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default AppRouter;
