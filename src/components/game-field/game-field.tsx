import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  newGame, pauseGame, updateTimeCount, setGameTic,
  setGameFlipped, setIsGameInProgress, saveResult } from '../../store/action-creators/game';
import { useTypedSelector } from '../hooks';
import { delays, FIELD_BIG } from '../../utils/constants';

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

  const { timeCount, moveCount, cards, flipped, inactive,
    isGameInProgress, isPauseGame, isEndGame } = useTypedSelector(s => s.game);
  const { speed, field } = useTypedSelector(s => s.options);

  const delay: number = delays[speed];

  useEffect(() => {
    dispatch(pauseGame(true));
  }, [dispatch]);

  useEffect(() => {
    if (isEndGame) {
      dispatch(saveResult());
    }
  }, [dispatch, isEndGame]);

  useEffect(() => {
    if (!isEndGame && isGameInProgress && !isPauseGame && timeCount === 0) {
      dispatch(setGameFlipped([]));
    }
  }, [dispatch, isEndGame, isGameInProgress, isPauseGame, timeCount]);

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

    window.setTimeout(() => {
      dispatch(setGameTic(id));
    }, 0);
  };

  const handleNewGameClick = () => {
    dispatch(newGame());
    dispatch(setIsGameInProgress(true));
    dispatch(setGameFlipped(cards.map(({ id }) => id)));
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
      delay={delay}
      isFlipped={isFlipped}
      isInactive={isInactive}
      onClick={isPauseGame ? undefined : (() => handleCardClick(id))} />;
  });

  const classes = (field === FIELD_BIG)
    ? s.big
    : s.small;

  return (
    <section className={s.container}>

      {(isPauseGame || isEndGame)
        && <ModalWrapper>
          <ModalGameWindow
            onClickContinue={handleContinueGameClick}
            onClickNew={handleNewGameClick} />
        </ModalWrapper>}

      <Button
        styleClass={s.wrapper_button}
        onClick={handlePauseGameClick}
        icon={<CloseIcon styleClass={s.wrapper_button_icon} />} />

      <div className={s.counts_container}>
        <TimeField value={timeCount} />
        <MovesField value={moveCount} />
      </div>

      <div className={`${s.cards_container} ${classes}`}>
        {Cards}
      </div>

    </section>
  );
}

export default GameField;
