import React from 'react';
import { Link } from 'react-router-dom';

import s from './not-found-page.module.scss';

const NotFoundPage = () => {
  return (
    <div className={ s.container }>
      <p>
        404 page not found. 
        Try to go back to the
      </p>
      <Link to='/' >game page</Link>
    </div>
  );
};

export default NotFoundPage;
