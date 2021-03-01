import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  setNewGame, setIsPauseGame,
  updateTimeCount, setGameTic, setGameFlipped } from '../../store/action-creators';
import { useTypedSelector } from '../hooks';
import { CARD_FACE_DELAY } from '../../utils/constants';

import GameCard from '../game-card';

import s from './game-field.module.scss';

const GameField: React.FC = () => {
  const dispatch = useDispatch();
  const {
    cards, flipped, inactive, moveCount, timeCount, isEndGame, isPauseGame,
  } = useTypedSelector(s => s.game);

  useEffect(() => {
    const timer: number = window.setInterval(() => {
      dispatch(setGameFlipped([]));
    }, CARD_FACE_DELAY);

    return () => {
      clearInterval(timer);
      dispatch(setIsPauseGame(true));
    };
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
    dispatch(setIsPauseGame(false));
  };

  const handlePauseGameClick = () => {
    dispatch(setIsPauseGame(true));
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

  let controls = isPauseGame
    ? (<>
      <button onClick={handleContinueGameClick}>Продолжить начатую игру</button>
      <button onClick={handleNewGameClick}>Новая игра</button>
      </>)
    : (<>
      <button onClick={handleNewGameClick}>Новая игра</button>
      <button onClick={handlePauseGameClick}>Пауза</button>
      </>);

  if (isEndGame) {
    controls = <button onClick={handleNewGameClick}>Новая игра</button>;
  }

  return (
    <section className={s.container}>
      {controls}
      <div>{timeCount} {moveCount}</div>
      {Cards}
    </section>
  );
}

export default GameField;
