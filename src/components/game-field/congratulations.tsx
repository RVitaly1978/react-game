import React from 'react';

import { MovesField } from './moves-field';
import { TimeField } from './time-field';

import s from './game-field.module.scss';

interface ICongratulationsProps {
  moveCount: number;
  timeCount: number;
};

export const Congratulations: React.FC<ICongratulationsProps> = ({
  timeCount, moveCount,
}) => {
  return (
    <div className={s.container_congratulations}>
      <h2>Congratulations!!!</h2>
      <p className={s.container_congratulations_row}>Your result:</p>
      <div className={s.container_congratulations_row}>
        <TimeField value={timeCount} />
        <MovesField value={moveCount} />
      </div>
    </div>
  );
};
