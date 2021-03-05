import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../hooks';
import { fields, delays, difficulties } from '../../utils/constants';
import { createSwitcherItems } from '../../utils/create-switcher-items';

// import { FormButtonGroup } from './button-group';
// import { FormAuthError } from './auth-error';
import InputSwitcher from '../input-switcher';

import s from './options-form.module.scss';
import { saveUserGameOptions } from '../../store/action-creators/options';
import { newGame } from '../../store/action-creators/game';

const OptionsForm: React.FC = () => {
  const dispatch = useDispatch();

  const {
    field: fieldProp, speed: speedProp, difficulty: difficultyProp,
  } = useTypedSelector(s => s.options);

  const [state, setState] = useState({ field: '', speed: '', difficulty: '' });

  useEffect(() => {
    setState({ field: fieldProp, speed: speedProp, difficulty: difficultyProp });
  }, [fieldProp, speedProp, difficultyProp]);

  const handleChange = (value: string, name: string) => {
    setState(s => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const { field, speed, difficulty } = state;
    dispatch(saveUserGameOptions({ field, speed, difficulty }));
    dispatch(newGame());
  };

  const switcherFields = createSwitcherItems(fields, state.field);
  const switcherDelays = createSwitcherItems(delays, state.speed);
  const switcherDifficulties = createSwitcherItems(difficulties, state.difficulty);

  return (
    <form className={s.container} onSubmit={handleSubmit}>
      {/* <FormAuthError error={userAuthError} /> */}

      <div className={s.form_group}>
        <InputSwitcher
          items = {switcherFields}
          setValue = {handleChange}
          name = {'field'} />

        <InputSwitcher
          items = {switcherDelays}
          setValue = {handleChange}
          name = {'speed'} />

        <InputSwitcher
          items = {switcherDifficulties}
          setValue = {handleChange}
          name = {'difficulty'} />
      </div>

      <button type='submit'>Save</button>
    </form>
  );
}

export default OptionsForm;
