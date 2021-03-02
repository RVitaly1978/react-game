import React, { useRef } from 'react';

import screenModeChange from '../../utils/screen-mode-change';
import { FullscreenOpenIcon } from '../../components/icons';
import Button from '../../components/button';

import GameField from '../../components/game-field';

import s from './game-page.module.scss';

const GamePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleFullScreenOpen = () => {
    containerRef.current && screenModeChange(containerRef.current);
  };

  return (
    <div className={s.container} ref={containerRef}>
      <Button
        styleClass={s.wrapper_button}
        onClick={handleFullScreenOpen}
        icon={<FullscreenOpenIcon styleClass={s.wrapper_button_icon} />} />

      <GameField />
    </div>
  );
}

export default GamePage;
