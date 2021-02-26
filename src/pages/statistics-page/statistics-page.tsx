import React from 'react';
import { useSelector } from 'react-redux';

import s from './statistics-page.module.scss';

const StatisticsPage: React.FC = () => {
  const state = useSelector(state => state);
  console.log(state);

  return (
    <div className={s.container}>
      Statistics page
    </div>
  );
}

export default StatisticsPage;
