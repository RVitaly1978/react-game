import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { initialization } from '../../store/action-creators/common';
import { useTypedSelector } from '../hooks';

import Header from '../header';
import Footer from '../footer';
import AppRouter from '../app-router';
import { BounceLoader } from '../bounce-loader/bounce-loader';

import s from './app.module.scss';

const App: React.FC = () => {
  const isLoading = useTypedSelector(s => s.common.isInitialLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialization());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={s.app}>
        <div className={s.app_content}>
          <BounceLoader />
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className={s.app}>
        <div className={s.app_content}>

          <Header />

          <section className={s.app_main}>
            <AppRouter />
          </section>

          <Footer />

        </div>
      </div>
    </Router>
  );
}

export default App;
