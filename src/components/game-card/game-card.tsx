import React, { useEffect, useState } from 'react';

import s from './game-card.module.scss';

export interface GameCardProps {
  id: number;
  face: string;
  delay: number;
  isFlipped: boolean;
  isInactive: boolean;
  onClick: undefined | (() => void);
}

const GameCard: React.FC<GameCardProps> = ({ face, isFlipped, isInactive, delay, onClick }) => {
  const [containerClasses, setContainerClasses] = useState(s.container);
  const [cardClasses, setCardClasses] = useState(`${s.card} ${s.card__isFlipped}`);

  useEffect(() => {
    if (isInactive) {
      setContainerClasses(`${s.container} ${s.container__inactive}`);
      setCardClasses(`${s.card} ${s.card__isFlipped}`);
    } else {
      setContainerClasses(s.container);
      setCardClasses(s.card);
    }
  }, [isInactive]);

  useEffect(() => {
    let timer: number | null = null;
    if (!isFlipped && cardClasses === `${s.card} ${s.card__isFlipped}` && !isInactive) {
      timer = window.setTimeout(() => {
        setCardClasses(s.card);
      }, delay);
    }

    if (isFlipped) {
      setCardClasses(`${s.card} ${s.card__isFlipped}`);
    }

    return () => {timer && clearInterval(timer)};
  }, [isFlipped, isInactive, cardClasses, delay]);

  return (
    <div className={containerClasses} data-role='card'>
      <div className={cardClasses}>
        <div className={s.card_face} onClick={onClick} />
        <div className={`${s.card_face} ${s.card_face__back}`}>{face}</div>
      </div>
    </div>
  );
}

export default GameCard;
