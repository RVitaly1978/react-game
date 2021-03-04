import React from 'react';
import { useLocation } from 'react-router';

import AuthForm from '../../components/auth-form';
import { LOGIN_ROUTE } from '../../utils/constants';

import s from './auth-page.module.scss';

const AuthPage: React.FC = () => {
  const location = useLocation();
  const isLogin = (location.pathname === LOGIN_ROUTE);

  return (
    <div className={s.container}>
      <AuthForm isLogin={isLogin} />
    </div>
  );
}

export default AuthPage;
