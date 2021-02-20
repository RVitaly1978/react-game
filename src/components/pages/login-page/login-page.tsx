import React from 'react';
import { useSelector } from 'react-redux';

import s from './login-page.module.scss';

const LoginPage: React.FC = () => {
  const state = useSelector(state => state);
  console.log(state);

  return (
    <div className={s.container}>
      Login Page
    </div>
  );
}

export default LoginPage;
