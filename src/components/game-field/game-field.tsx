import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  setNewGame, pauseGame,
  updateTimeCount, setGameTic, setGameFlipped } from '../../store/action-creators';
import { useTypedSelector } from '../hooks';
import { CARD_FACE_DELAY } from '../../utils/constants';

import { TimeField } from './time-field';
import { MovesField } from './moves-field';
import { ModalWrapper } from './modal-wrapper';
import { CloseIcon } from '../icons';
import { ModalGameWindow } from './modal-game-window';
import Button from '../button';
import GameCard from '../game-card';

import s from './game-field.module.scss';

const GameField: React.FC = () => {
  const dispatch = useDispatch();
  const {
    cards, flipped, inactive, moveCount, timeCount, isEndGame, isPauseGame, isGameInProgress,
  } = useTypedSelector(s => s.game);

  useEffect(() => {
    dispatch(pauseGame(true));
  }, [dispatch]);

  useEffect(() => {
    const timer: number = window.setInterval(() => {
      dispatch(setGameFlipped([]));
    }, CARD_FACE_DELAY);

    return () => {clearInterval(timer)};
  }, [dispatch]);

  useEffect(() => {
    let timer: number | null = null;
    if (!isEndGame && !isPauseGame) {
      timer = window.setInterval(() => {
        dispatch(updateTimeCount());
      }, 1000);
    }
    return () => {timer && clearInterval(timer)};
  }, [isEndGame, isPauseGame, dispatch]);

  const handleCardClick = (id: number) => {
    dispatch(setGameFlipped([...flipped, id]));
    dispatch(setGameTic(id));
  };

  const handleNewGameClick = () => {
    dispatch(setNewGame());
  };

  const handleContinueGameClick = () => {
    dispatch(pauseGame(false));
  };

  const handlePauseGameClick = () => {
    dispatch(pauseGame(true));
  };

  const Cards = cards.map(({ id, face }) => {
    const isFlipped = (flipped.find((el) => el === id) !== undefined);
    const isInactive = (inactive.find((el) => el === id) !== undefined);
    return <GameCard key={id}
      id={id}
      face={face}
      isFlipped={isFlipped}
      isInactive={isInactive}
      onClick={isPauseGame ? undefined : (() => handleCardClick(id))} />;
  });

  return (
    <section className={s.container}>

      {(isPauseGame || isEndGame)
        && <ModalWrapper>
          <ModalGameWindow
            onClickContinue={handleContinueGameClick}
            onClickNew={handleNewGameClick}
            isEndGame={isEndGame}
            moveCount={moveCount}
            timeCount={timeCount}
            isDisabled={isEndGame || !isGameInProgress} />
        </ModalWrapper>}

      <Button
        styleClass={s.wrapper_button}
        onClick={handlePauseGameClick}
        icon={<CloseIcon styleClass={s.wrapper_button_icon} />} />

      <div className={s.counts_container}>
        <TimeField value={timeCount} />
        <MovesField value={moveCount} />
      </div>

      <div className={s.cards_container}>
        {Cards}
      </div>

    </section>
  );
}

export default GameField;
