import React from 'react';

import OptionsForm from '../../components/options-form';
import SettingsForm from '../../components/settings-form';

import s from './game-settings-page.module.scss';

const GameSettingsPage: React.FC = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <SettingsForm />
        <OptionsForm />
      </div>
    </div>
  );
}

export default GameSettingsPage;
