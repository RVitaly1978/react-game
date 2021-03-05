import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../hooks';
import { updateGameUserNick } from '../../store/action-creators/settings';

import s from './settings-form.module.scss';

const SettingsForm: React.FC = () => {
  const dispatch = useDispatch();

  const { userNick } = useTypedSelector(s => s.settings);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    dispatch(updateGameUserNick(value));
  };

  //   dispatch(updateMusicVolume(1));
  //   dispatch(updateEffectsVolume(2));
  //   dispatch(updateGameUserNick('Vit'));
  //   dispatch(updateGameTheme('dark'));
  //   dispatch(updateGameLang('be'));

  return (
    <form className={s.container}>

      <div className={s.form_group}>
        <label htmlFor='userNick'>UserNick</label>
          <input
            type='text'
            id='userNick'
            name={'updateGameUserNick'}
            autoComplete='off'
            value={userNick}
            onChange={handleChange} />
      </div>

    </form>
  );
}

export default SettingsForm;
