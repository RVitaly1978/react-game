import React from 'react';

import Header from '../header';
import Footer from '../footer';
import GameOptions from '../game-options';

import s from './app.module.scss';

const App: React.FC = () => {
  return (
    <div className={s.app}>
      <Header />
      <GameOptions />
      app
      <Footer />
    </div>
  );
}

export default App;
