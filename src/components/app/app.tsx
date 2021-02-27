import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { checkUserLogged } from '../../store/action-creators';
import { useTypedSelector } from '../hooks';

import Header from '../header';
import Footer from '../footer';
import AppRouter from '../app-router';

import s from './app.module.scss';

const App: React.FC = () => {
  const isLoading = useTypedSelector(s => s.game.isInitialLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserLogged());
  }, [dispatch]);

  if (isLoading) {
    return (<div>Loading...</div>)
  }

  return (
    <Router>
      <div className={s.app}>
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
