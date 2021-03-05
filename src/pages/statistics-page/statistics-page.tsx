import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../components/hooks';
import { fetchUsersHighScores, fetchUserStatistics } from '../../store/action-creators/statistics';

import s from './statistics-page.module.scss';

const StatisticsPage: React.FC = () => {
  const dispatch = useDispatch();

  const userStatistics = useTypedSelector(s => s.statistics.userStatistics);
  const usersHighScores = useTypedSelector(s => s.statistics.usersHighScores);
  console.log(userStatistics);
  console.log(usersHighScores);

  useEffect(() => {
    dispatch(fetchUserStatistics());
    dispatch(fetchUsersHighScores());
  }, [dispatch]);

  return (
    <div className={s.container}>
      Statistics page
    </div>
  );
}

export default StatisticsPage;
