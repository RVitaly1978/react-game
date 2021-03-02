import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

import { useTypedSelector } from '../hooks';
import { userLogout } from '../../store/action-creators';

import {
  LOGIN_ROUTE, GAME_ROUTE, SETTINGS_ROUTE, STATISTICS_ROUTE,
} from '../../utils/constants';

import s from './navbar.module.scss';

const Navbar: React.FC = () => {
  const isAuth = useTypedSelector(s => s.auth.isAuth);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleExit = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    dispatch(userLogout());
    history.push(LOGIN_ROUTE);
  }

  if (!isAuth) {
    return null;
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
          <NavLink to={LOGIN_ROUTE} onClick={handleExit} activeClassName={s.active} >Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
