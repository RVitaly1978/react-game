import React, { useState, useEffect } from 'react';

import s from './game-card.module.scss';

const GameCard: React.FC = () => {
  const [classes, setClasses] = useState(s.card);

  useEffect(() => {
    let timer: any = null;
    if (classes === `${s.card} ${s.card__isFlipped}`) {
      timer = setTimeout(() => {
        setClasses(s.card);
      }, 1000);
    }

    return () => timer && clearTimeout(timer);
  }, [classes]);

  const handleClick = () => {
    setClasses(`${s.card} ${s.card__isFlipped}`);
  };

  return (
    <div className={s.container}>
      <div className={classes}>
        <div className={s.card_face} onClick={handleClick}>FrontSide</div>
        <div className={`${s.card_face} ${s.card_face__back}`}>BackSide</div>
      </div>
    </div>
  );
}

export default GameCard;
