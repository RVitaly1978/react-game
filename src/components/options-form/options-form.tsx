import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../hooks';
import { fields, delays, difficulties } from '../../utils/constants';
import { createSwitcherItems } from '../../utils/create-switcher-items';
import { saveGameOptions } from '../../store/action-creators/options';
import { newGame } from '../../store/action-creators/game';

import ErrorMessage from '../error-message';
import InputSwitcher from '../input-switcher';

import s from './options-form.module.scss';

const OptionsForm: React.FC = () => {
  const dispatch = useDispatch();

  const {
    field: fieldProp, speed: speedProp, difficulty: difficultyProp,
  } = useTypedSelector(s => s.options);
  const { isOptionsSaving, optionsSavingError } = useTypedSelector(s => s.common);

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
    try {
      await dispatch(saveGameOptions({ field, speed, difficulty }));
      dispatch(newGame());
    } catch (e) {
      return;
    }
  };

  const isDisabled = isOptionsSaving
    || (fieldProp === state.field
      && speedProp === state.speed
      && difficultyProp === state.difficulty);

  return (
    <form className={s.container} onSubmit={handleSubmit}>
      <ErrorMessage error={optionsSavingError} classes={s.form_error} />

      <div className={s.form_group}>
        <p>Field size:</p>
        <InputSwitcher
          items = {createSwitcherItems(fields, state.field)}
          setValue = {handleChange}
          name = {'field'} />
      </div>

      <div className={s.form_group}>
        <p>Game speed:</p>
        <InputSwitcher
          items = {createSwitcherItems(delays, state.speed)}
          setValue = {handleChange}
          name = {'speed'} />
      </div>

      <div className={s.form_group}>
        <p>Game difficulty:</p>
        <InputSwitcher
          items = {createSwitcherItems(difficulties, state.difficulty)}
          setValue = {handleChange}
          name = {'difficulty'} />
      </div>

      <button
        type='submit'
        disabled={isDisabled}>
        {isOptionsSaving ? 'Saving...' : 'Save'}</button>
    </form>
  );
}

export default OptionsForm;
