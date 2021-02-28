import React, { useEffect, useState } from 'react';

import GameCard from '../game-card';

import s from './game-field.module.scss';

const cards = [
  { id: 1, face: 'a' },
  { id: 2, face: 'a' },
  { id: 3, face: 'b' },
  { id: 4, face: 'b' },
  { id: 5, face: 'c' },
  { id: 6, face: 'c' },
];

const delay: number = 1000;

const GameField: React.FC = () => {
  const [pair, setPair] = useState<number[]>([]);
  const [inactive, setInactive] = useState<number[]>([]);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [timeCount, setTimeCount] = useState<number>(0);
  const [endGame, setEndGame] = useState<boolean>(false);

  if (cards.length === inactive.length && !endGame) {
    setEndGame(true);
  }

  useEffect(() => {
    let timer: number | null = null;
    if (!endGame) {
      timer = window.setInterval(() => {
        setTimeCount(c => c + 1);
      }, 1000);
    }
    return () => {timer && clearInterval(timer)};
  }, [endGame]);

  useEffect(() => {
    let timer: number | null = null;
    console.log(timer);
    if (pair.length >= 2) {
      timer = window.setTimeout(() => {
        const firstCard = cards.find(({ id }) => id === pair[0]);
        const secondCard = cards.find(({ id }) => id === pair[1]);

        if (firstCard && secondCard && (firstCard.face === secondCard.face)) {
          setInactive(s => [...s, pair[0], pair[1]]);
        }

        setPair([...pair.slice(2)]);
        setMoveCount(c => c + 1);
      }, delay);
    }
    return () => {timer && clearInterval(timer)};
  }, [pair]);

  const handleCardClick = (id: number) => {
    setPair([...pair, id]);
  };

  const Cards = cards.map(({ id, face }) => {
    const isFlipped = (pair.find((el) => el === id) !== undefined);
    const isInactive = (inactive.find((el) => el === id) !== undefined);
    return <GameCard key={id}
      id={id}
      face={face}
      isFlipped={isFlipped}
      isInactive={isInactive}
      onClick={handleCardClick} />;
  });

  return (
    <section className={s.container}>
      <div>{timeCount} {moveCount}</div>
      {Cards}
    </section>
  );
}

export default GameField;
