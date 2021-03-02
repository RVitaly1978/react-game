import React from 'react';

import s from './bounce-loader.module.scss';

export const BounceLoader = ({ styleClass = null }) => {
  return (
    <div className={`${s.bounce_container} ${styleClass}`}>
      <span className={`${s.bounce_point} ${s.bounce_point__1}`}></span>
      <span className={`${s.bounce_point} ${s.bounce_point__2}`}></span>
      <span className={s.bounce_point}></span>
    </div>
  );
};
