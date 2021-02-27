import React, { useRef } from 'react';
import { Redirect } from 'react-router';

import { useTypedSelector } from '../../components/hooks';
import { LOGIN_ROUTE } from '../../utils/constants';
import screenModeChange from '../../utils/screen-mode-change';

import GameField from '../../components/game-field';

import s from './game-page.module.scss';

const GamePage: React.FC = () => {
  // const isAuth = useTypedSelector(s => s.auth.isAuth);
  const containerRef = useRef(null);


  const handleFullScreenOpen = () => {
    containerRef.current && screenModeChange(containerRef.current);
  };

  return (
    <div className={s.container} ref={containerRef}>
      <GameField />
      <button onClick={handleFullScreenOpen}>full screen</button>
    </div>
  );
}

export default GamePage;
