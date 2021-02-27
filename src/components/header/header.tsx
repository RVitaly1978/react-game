import React from 'react';

import Navbar from '../navbar';

import s from './header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={s.header}>
      <div>React-game</div>
      <Navbar />
    </div>
  );
}

export default Header;
