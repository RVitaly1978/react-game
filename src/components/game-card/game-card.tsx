import React from 'react';

import s from './game-card.module.scss';

export interface GameCardProps {
  id: number;
  face?: string;
  isFlipped: boolean;
  isInactive: boolean;
  onClick: (id: number) => void;
}

const GameCard: React.FC<GameCardProps> = ({ id, isFlipped, isInactive, onClick }) => {
  let cardClasses = isFlipped
    ? `${s.card} ${s.card__isFlipped}`
    : s.card;

  let containerClasses = s.container;
    if (isInactive) {
      containerClasses = `${s.container} ${s.container__inactive}`;
      cardClasses = `${s.card} ${s.card__isFlipped}`;
    }

  return (
    <div className={containerClasses}>
      <div className={cardClasses}>
        <div className={s.card_face} onClick={() => onClick(id)}>FrontSide</div>
        <div className={`${s.card_face} ${s.card_face__back}`}>BackSide</div>
      </div>
    </div>
  );
}

export default GameCard;
