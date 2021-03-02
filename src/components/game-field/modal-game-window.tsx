import React from 'react';

import { Congratulations } from './congratulations';

import s from './game-field.module.scss';

interface IStartGameWindowProps {
  onClickContinue: () => void;
  onClickNew: () => void;
  isDisabled: boolean;
  isEndGame: boolean;
  moveCount: number;
  timeCount: number;
};

export const ModalGameWindow: React.FC<IStartGameWindowProps> = ({
  onClickContinue, onClickNew, isDisabled = false, isEndGame = false,
  moveCount, timeCount,
}) => {
  return (
    <>
      {isEndGame && <Congratulations moveCount={moveCount} timeCount={timeCount} />}

      <button
        onClick={onClickContinue}
        disabled={isDisabled}
      >Continue the game</button>

      <button
        onClick={onClickNew}
      >New game</button>
    </>
  );
};
