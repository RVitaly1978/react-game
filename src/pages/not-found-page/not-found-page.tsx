import React from 'react';
import { Link } from 'react-router-dom';

import { GAME_ROUTE } from '../../utils/constants';

import s from './not-found-page.module.scss';

const NotFoundPage: React.FC = () => {
  return (
    <div className={s.container}>
      <p className={s.content}>404 page not found.</p>
      <p className={s.content}>
        Try to go back to the&nbsp;
        <Link to={GAME_ROUTE} >game page</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
