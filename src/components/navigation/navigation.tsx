import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './navigation.module.scss';

const Navigation: React.FC = () => {
  return (
    <ul className={s.navigation}>
      <li className={s.link}>
        <NavLink exact to='/' activeClassName={s.active} >Game</NavLink>
      </li>
      <li className={s.link}>
        <NavLink to='/options' activeClassName={s.active} >Options</NavLink>
      </li>
      <li className={s.link}>
        <NavLink to='/statistics' activeClassName={s.active} >Statistics</NavLink>
      </li>
      <li className={s.link}>
        <NavLink to='/login' activeClassName={s.active} >Login</NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
