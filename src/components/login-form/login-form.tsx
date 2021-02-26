import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

import { login } from '../../api';
import { REGISTRATION_ROUTE } from '../../utils/constants';

import s from './login-form.module.scss';

const LoginForm: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  console.log(location);

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
      const res = await login(email, password);
      const { token } = res.data;
      console.log(token);
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
          Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
      </div>

      <button type='submit'>Login</button>

    </form>
  );
}

export default LoginForm;
