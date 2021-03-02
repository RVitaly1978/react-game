import React from 'react';

import s from './game-field.module.scss';

interface IMovesFieldProps {
  value: number;
};

export const MovesField: React.FC<IMovesFieldProps> = ({ value }) => {
  return (
    <div className={s.data_field}>
      <span>moves:&nbsp;</span>
      <span>{value}</span>
    </div>
  );
}