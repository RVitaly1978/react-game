import React from 'react';
import { useSelector } from 'react-redux';

import s from './game-options.module.scss';

const GameOptions: React.FC = () => {
  const state = useSelector(state => state);
  console.log(state);

  return (
    <div className={s.container}>
      Game Options
    </div>
  );
}

export default GameOptions;
