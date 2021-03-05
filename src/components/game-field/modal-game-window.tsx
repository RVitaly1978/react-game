import React from 'react';

import ErrorMessage from '../error-message';
import { useTypedSelector } from '../hooks';
import { Congratulations } from './congratulations';

import s from './game-field.module.scss';

interface IStartGameWindowProps {
  onClickContinue: () => void;
  onClickNew: () => void;
};

export const ModalGameWindow: React.FC<IStartGameWindowProps> = ({
  onClickContinue, onClickNew,
}) => {
  const {
    timeCount, moveCount, isEndGame, isGameInProgress,
  } = useTypedSelector(s => s.game);
  const { isGameSaving, gameSavingError } = useTypedSelector(s => s.common);

  return (
    <>
      {isEndGame && <Congratulations moveCount={moveCount} timeCount={timeCount} />}

      <button
        onClick={onClickContinue}
        disabled={isEndGame || !isGameInProgress}
      >Continue the game</button>

      <button
        onClick={onClickNew}
        disabled={isGameSaving}
      >{isGameSaving ? 'Saving result...' : 'New game'}
      </button>

      <ErrorMessage error={gameSavingError} classes={s.game_error} />
    </>
  );
};
