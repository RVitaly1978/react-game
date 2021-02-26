import React from 'react';
import { Redirect } from 'react-router';

import { useTypedSelector } from '../../components/hooks';
import { LOGIN_ROUTE } from '../../utils/constants';

import s from './game-page.module.scss';

const GamePage: React.FC = () => {
  const isAuth = useTypedSelector(s => s.auth.isAuth);

  if (!isAuth) {
    return <Redirect to={LOGIN_ROUTE} />
  }

  return (
    <div className={s.container}>
      Game Page
    </div>
  );
}

export default GamePage;
