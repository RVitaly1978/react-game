import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../components/hooks';
import OptionsForm from '../../components/options-form';
import { newGame } from '../../store/action-creators/game';
import { saveUserGameOptions } from '../../store/action-creators/options';
import {
  updateEffectsVolume, updateGameLang, updateMusicVolume, updateGameTheme, updateGameUserNick,
} from '../../store/action-creators/settings';
import { IGameOptionsState } from '../../types/game-options';
import { IGameSettingsState } from '../../types/game-settings';

import s from './game-settings-page.module.scss';

const GameSettingsPage: React.FC = () => {
  // const dispatch = useDispatch();

  // const options = useTypedSelector(s => s.options);
  // const settings = useTypedSelector(s => s.settings);

  // useEffect(() => {
  //   dispatch(updateMusicVolume(1));
  //   dispatch(updateEffectsVolume(2));
  //   dispatch(updateGameUserNick('Vit'));
  //   dispatch(updateGameTheme('dark'));
  //   dispatch(updateGameLang('be'));
  // }, []);

  // const field: string = 'xxl';
  // const speed: string = 'fast';
  // const difficulty: string = 'hard';

  // const handleClick = () => {
  //   dispatch(saveUserGameOptions({ field, speed, difficulty }));
  //   dispatch(newGame());
  // };

  return (
    <div className={s.container}>
      <OptionsForm />
      {/* <ul>
        {Object.keys(options).map((key) => <li key={key}>{options[key as keyof IGameOptionsState]}</li>)}
      </ul>
      ---------
      <ul>
        {Object.keys(settings).map((key) => <li key={key}>{settings[key as keyof IGameSettingsState]}</li>)}
      </ul>
      ---------
      <button onClick={handleClick}>Save</button> */}
    </div>
  );
}

export default GameSettingsPage;
