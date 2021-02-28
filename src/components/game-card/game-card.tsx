import React, { useEffect, useState } from 'react';

import { CARD_FACE_DELAY } from '../../utils/constants';

import s from './game-card.module.scss';

export interface GameCardProps {
  id: number;
  face: string;
  isFlipped: boolean;
  isInactive: boolean;
  onClick: undefined | (() => void);
}

const GameCard: React.FC<GameCardProps> = ({ face, isFlipped, isInactive, onClick }) => {
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
      }, CARD_FACE_DELAY);
    }

    if (isFlipped) {
      setCardClasses(`${s.card} ${s.card__isFlipped}`);
    }

    return () => {timer && clearInterval(timer)};
  }, [isFlipped, isInactive, cardClasses]);

  return (
    <div className={containerClasses}>
      <div className={cardClasses}>
        <div className={s.card_face} onClick={onClick}>FrontSide</div>
        <div className={`${s.card_face} ${s.card_face__back}`}>{face}</div>
      </div>
    </div>
  );
}

export default GameCard;
