import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../components/hooks';
import StatisticsTable from '../../components/statistics-table';
import { fetchUsersHighScores, fetchUserStatistics } from '../../store/action-creators/statistics';

import s from './statistics-page.module.scss';

const StatisticsPage: React.FC = () => {
  const dispatch = useDispatch();

  const { isStatisticsFetching, statisticsFetchingError } = useTypedSelector(s => s.common);
  const userStatistics = useTypedSelector(s => s.statistics.userStatistics);
  const usersHighScores = useTypedSelector(s => s.statistics.usersHighScores);

  useEffect(() => {
    dispatch(fetchUserStatistics());
    dispatch(fetchUsersHighScores());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <div className={s.content}>

      <table className={s.table}>
        <tbody className={s.table_body}>
          <tr className={s.table_head}>
            <td>user</td>
            <td>field</td>
            <td>speed</td>
            <td>difficulty</td>
            <td>time</td>
            <td>moves</td>
            <td>date</td>
          </tr>
          <StatisticsTable
            data={userStatistics}
            isLoading={isStatisticsFetching}
            error={statisticsFetchingError} />

          <StatisticsTable
            data={usersHighScores}
            isLoading={isStatisticsFetching}
            error={statisticsFetchingError} />
        </tbody>
      </table>

      </div>
    </div>
  );
}

export default StatisticsPage;
