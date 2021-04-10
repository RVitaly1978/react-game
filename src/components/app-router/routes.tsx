import React from 'react';

import {
  GAME_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE, SETTINGS_ROUTE, STATISTICS_ROUTE,
} from '../../utils/constants';

import GamePage from '../../pages/game-page';
import GameSettingsPage from '../../pages/game-settings-page';
// import LoginPage from '../../pages/login-page';
import AuthPage from '../../pages/auth-page';
// import RegistrationPage from '../../pages/registration-page';
import StatisticsPage from '../../pages/statistics-page';

interface IRoute {
  path: string;
  Component: React.FC;
};

export const authRoutes: IRoute[] = [
  { path: GAME_ROUTE, Component: GamePage },
  { path: SETTINGS_ROUTE, Component: GameSettingsPage },
  { path: STATISTICS_ROUTE, Component: StatisticsPage },
];

export const publicRoutes: IRoute[] = [
  { path: LOGIN_ROUTE, Component: AuthPage },
  { path: REGISTRATION_ROUTE, Component: AuthPage },
  // { path: LOGIN_ROUTE, Component: LoginPage },
  // { path: REGISTRATION_ROUTE, Component: RegistrationPage },
];
