import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

import { useTypedSelector } from '../hooks';
import { setUserLogout } from '../../store/action-creators';

import {
  LOGIN_ROUTE, GAME_ROUTE, SETTINGS_ROUTE, STATISTICS_ROUTE,
} from '../../utils/constants';

import s from './navbar.module.scss';

const Navbar: React.FC = () => {
  const isAuth = useTypedSelector(s => s.auth.isAuth);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(setUserLogout());
    history.push(LOGIN_ROUTE);
  }

  if (!isAuth) {
    return (
      <nav>
        <NavLink to={LOGIN_ROUTE}>Authorization</NavLink>
      </nav>
    );
  }

  return (
    <nav>
      <ul className={s.nav}>
        <li className={s.link}>
          <NavLink exact to={GAME_ROUTE} activeClassName={s.active} >Game</NavLink>
        </li>
        <li className={s.link}>
          <NavLink to={SETTINGS_ROUTE} activeClassName={s.active} >Settings</NavLink>
        </li>
        <li className={s.link}>
          <NavLink to={STATISTICS_ROUTE} activeClassName={s.active} >Statistics</NavLink>
        </li>
        <li className={s.link}>
          <button onClick={handleExit}>Exit</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
