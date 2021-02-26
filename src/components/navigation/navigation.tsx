import React from 'react';
import { NavLink } from 'react-router-dom';

import { LOGIN_ROUTE } from '../../utils/constants';

import s from './navigation.module.scss';

const Navigation: React.FC = () => {
  const isAuth = false;

  const auth = isAuth
    ? <NavLink to={LOGIN_ROUTE}>Exit</NavLink>
    : <NavLink to={LOGIN_ROUTE}>Auth</NavLink>;

  return (
    <div>
      <ul className={s.navigation}>
        <li className={s.link}>
          <NavLink exact to='/' activeClassName={s.active} >Game</NavLink>
        </li>
        <li className={s.link}>
          <NavLink to='/settings' activeClassName={s.active} >Settings</NavLink>
        </li>
        <li className={s.link}>
          <NavLink to='/statistics' activeClassName={s.active} >Statistics</NavLink>
        </li>
        <li className={s.link}>
          <NavLink to='/login' activeClassName={s.active} >Login</NavLink>
        </li>
        <li className={s.link}>
          <NavLink to='/registration' activeClassName={s.active} >Registration</NavLink>
        </li>
      </ul>

      {auth}

    </div>
  );
}

export default Navigation;
