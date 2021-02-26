import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

import { fetchUserRegistration } from '../../store/action-creators/auth';
import { GAME_ROUTE, LOGIN_ROUTE } from '../../utils/constants';
import { useTypedSelector } from '../hooks';

import s from './registration-form.module.scss';

const RegistrationForm: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userAuthError = useTypedSelector(s => s.auth.userAuthError);
  const dispatch = useDispatch();
  // const history = useHistory();

  const handlePasswordVisibleToggle = () => {
    setIsPasswordVisible(s => !s);
  };

  const handleEmailChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (email && password) {
      dispatch(fetchUserRegistration(email, password));
      // history.push(GAME_ROUTE);
    }
  };

  return (
    <form className={s.container} onSubmit={handleSubmit}>
      {userAuthError && <div>{userAuthError}</div>}

      <div className={s.form_group}>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          placeholder='Email'
          value={email}
          onChange={handleEmailChange} />
      </div>

      <div className={s.form_group}>
        <label htmlFor='password'>Password</label>
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          id='password'
          placeholder='Password'
          value={password}
          onChange={handlePasswordChange} />
        <button type='button' onClick={handlePasswordVisibleToggle}>Visible</button>
      </div>

      <div>
          Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
      </div>

      <button type='submit'>Registration</button>

    </form>
  );
}

export default RegistrationForm;
