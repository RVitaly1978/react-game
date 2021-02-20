import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../header';
import Footer from '../footer';
import GameOptionsPage from '../pages/game-options-page';
import Navigation from '../navigation';
import LoginPage from '../pages/login-page';
import GamePage from '../pages/game-page';
import StatisticsPage from '../pages/statistics-page';
import NotFoundPage from '../pages/not-found-page';

import s from './app.module.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className={s.app}>
        <Header />
        <Navigation />

        <Switch>
          <Route exact path='/' component={GamePage} />
          <Route path='/options' component={GameOptionsPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/statistics' component={StatisticsPage} />
          <Route component={NotFoundPage} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
