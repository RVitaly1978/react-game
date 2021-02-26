import React from 'react';

import LoginForm from '../../components/login-form';

import s from './login-page.module.scss';

const LoginPage: React.FC = () => {
  return (
    <div className={s.container}>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
