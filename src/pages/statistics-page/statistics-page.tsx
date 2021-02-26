import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../components/hooks';
import { fetchUsersHighScores, fetchUserStatistics } from '../../store/action-creators';

import s from './statistics-page.module.scss';

const StatisticsPage: React.FC = () => {
  const userStatistics = useTypedSelector(s => s.statistics.userStatistics);
  const usersHighScores = useTypedSelector(s => s.statistics.usersHighScores);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserStatistics());
    dispatch(fetchUsersHighScores());
  }, [dispatch]);

  console.log(userStatistics);
  console.log(usersHighScores);

  return (
    <div className={s.container}>
      Statistics page
    </div>
  );
}

export default StatisticsPage;
