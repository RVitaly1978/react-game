import React from 'react';
import { useSelector } from 'react-redux';

import s from './game-page.module.scss';

const GamePage: React.FC = () => {
  const state = useSelector(state => state);
  console.log(state);

  return (
    <div className={s.container}>
      Game Page
    </div>
  );
}

export default GamePage;
