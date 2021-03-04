import React from 'react';

import s from './game-field.module.scss';

interface IGameErrorProps {
  error: string | null;
};

export const GameError: React.FC<IGameErrorProps> = ({ error }) => {
  if (error) {
    return (
      <div className={s.game_error}>
        {error}
      </div>
    );
  }

  return null;
};
