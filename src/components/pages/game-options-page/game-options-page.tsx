import React from 'react';
import { useSelector } from 'react-redux';

import s from './game-options-page.module.scss';

const GameOptionsPage: React.FC = () => {
  const state = useSelector(state => state);
  console.log(state);

  return (
    <div className={s.container}>
      Game Options page
    </div>
  );
}

export default GameOptionsPage;
