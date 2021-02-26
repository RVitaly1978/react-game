import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../header';
import Footer from '../footer';
import Navbar from '../navbar';
import AppRouter from '../app-router';

import s from './app.module.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className={s.app}>
        <Header />
        <Navbar />
        <AppRouter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
