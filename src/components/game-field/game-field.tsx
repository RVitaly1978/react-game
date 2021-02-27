import React from 'react';

import GameCard from '../game-card';

import s from './game-field.module.scss';

const GameField: React.FC = () => {

  // const handleEmailChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(evt.target.value);
  // };

  return (
    <section className={s.container}>
      <GameCard />
    </section>
  );
}

export default GameField;
