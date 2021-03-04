import React from 'react';

import { useTypedSelector } from '../hooks';
import { Congratulations } from './congratulations';
import { GameError } from './game-error';

import s from './game-field.module.scss';

interface IStartGameWindowProps {
  onClickContinue: () => void;
  onClickNew: () => void;
};

export const ModalGameWindow: React.FC<IStartGameWindowProps> = ({
  onClickContinue, onClickNew,
}) => {
  const {
    timeCount, moveCount, isLoading, error, isEndGame, isGameInProgress,
  } = useTypedSelector(s => s.game);

  return (
    <>
      {isEndGame && <Congratulations moveCount={moveCount} timeCount={timeCount} />}

      <button
        onClick={onClickContinue}
        disabled={isEndGame || !isGameInProgress}
      >Continue the game</button>

      <button
        onClick={onClickNew}
        disabled={isLoading}
      >{isLoading ? 'Saving result...' : 'New game'}
      </button>

      <GameError error={error} />
    </>
  );
};
