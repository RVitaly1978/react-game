import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  userLogin, userRegistration, setUserAuthError,
} from '../../store/action-creators/auth';
import { GAME_ROUTE } from '../../utils/constants';
import { useTypedSelector } from '../hooks';

import { PasswordField } from './password-field';
import { FormButtonGroup } from './button-group';
import ErrorMessage from '../error-message';

import s from './auth-form.module.scss';

interface IAuthFormProps {
  isLogin: boolean;
};

const AuthForm: React.FC<IAuthFormProps> = ({ isLogin }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userAuthError = useTypedSelector(s => s.auth.userAuthError);
  const userAuthFetch = useTypedSelector(s => s.auth.isLoading);

  const [state, setState] = useState({ email: '', password: '' });

  useEffect(() => {
    if (userAuthError && (!state.email || !state.password)) {
      dispatch(setUserAuthError(null));
    }
  }, [userAuthError, state.email, state.password]);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = evt.target;
    setState(s => ({ ...s, [id]: value }));

    if (userAuthError) {
      dispatch(setUserAuthError(null));
    }
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (state.email && state.password) {
      try {
        isLogin
          ? await dispatch(userLogin(state.email, state.password))
          : await dispatch(userRegistration(state.email, state.password));
        history.push(GAME_ROUTE);
      } catch (e) {}
    }
  };

  return (
    <form className={s.container} onSubmit={handleSubmit}>
      <ErrorMessage error={userAuthError} classes={s.form_error} />

      <div className={s.form_group}>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          placeholder='Email'
          autoComplete='off'
          autoFocus={true}
          value={state.email}
          onChange={handleChange} />
      </div>

      <PasswordField
        value={state.password}
        onChange={handleChange} />

      <FormButtonGroup isLogin={isLogin} isLoading={userAuthFetch} />
    </form>
  );
}

export default AuthForm;
