import React from 'react';
import { NavLink } from 'react-router-dom';

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/constants';
import { BounceLoader } from '../bounce-loader/bounce-loader';

import s from './auth-form.module.scss';

interface IButtonGroupProps {
  isLogin: boolean;
  isLoading: boolean;
};

export const FormButtonGroup: React.FC<IButtonGroupProps> = ({ isLogin, isLoading }) => {
  if (isLoading) {
    return (
      <div className={s.form_button_group}>
        <div className={s.form_group_loader}>
          <BounceLoader />
        </div>
      </div>
    );
  }

  return (
    <div className={s.form_button_group}>
      { isLogin
        ? (<><NavLink to={REGISTRATION_ROUTE}>Sign up</NavLink>
          <button type='submit'>Login</button></>)
        : (<><NavLink to={LOGIN_ROUTE}>Sign in</NavLink>
          <button type='submit'>Register</button></>)
      }
    </div>
  );
};
