import React from 'react';

import s from './game-field.module.scss';

interface ITimeFieldProps {
  value: number;
};

export const TimeField: React.FC<ITimeFieldProps> = ({ value }) => {
  const SECONDS_IN_MINUTE = 60;
  const sec = value % SECONDS_IN_MINUTE;
  const min = (value - sec) / SECONDS_IN_MINUTE;

  const time = `
    ${min > 9 ? min : '0' + min}
    ${sec > 9 ? ': ' + sec : ': 0' + sec}
  `;

  return (
    <div className={s.data_field}>
      <span>time:&nbsp;</span>
      <span>{time}</span>
    </div>
  );
}