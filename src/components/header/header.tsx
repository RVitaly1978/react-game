import React from 'react';

import Navbar from '../navbar';

import s from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <h1 className={s.logo}>Memory</h1>
      <Navbar />
    </header>
  );
}

export default Header;
