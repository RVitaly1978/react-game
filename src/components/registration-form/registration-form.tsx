import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { registration } from '../../api';
import { LOGIN_ROUTE } from '../../utils/constants';

import s from './registration-form.module.scss';

const RegistrationForm: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      const res = await registration(email, password);
      // const { token } = res.data;
      console.log(res);
    }
  };

  return (
    <form className={s.container} onSubmit={handleSubmit}>

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
