import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import { useTypedSelector } from '../../components/hooks';
import StatisticsTable from '../../components/statistics-table';
import { fetchUsersHighScores, fetchUserStatistics } from '../../store/action-creators/statistics';
import { USER_STATISTICS_ROUTE, HIGH_SCORES_ROUTE } from '../../utils/constants';

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

        <nav>
          <ul className={s.nav}>
            <li className={s.link}>
              <NavLink
                to={USER_STATISTICS_ROUTE}
                activeClassName={s.active} >
                Statistics
              </NavLink>
            </li>
            <li className={s.link}>
              <NavLink
                to={HIGH_SCORES_ROUTE}
                activeClassName={s.active} >
                HighScores
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path={USER_STATISTICS_ROUTE}>
            <StatisticsTable
              data={userStatistics}
              isLoading={isStatisticsFetching}
              error={statisticsFetchingError} />
          </Route>

          <Route exact path={HIGH_SCORES_ROUTE}>
            <StatisticsTable
              data={usersHighScores}
              isLoading={isStatisticsFetching}
              error={statisticsFetchingError} />
          </Route>

          <Redirect to={USER_STATISTICS_ROUTE} />
        </Switch>

      </div>
    </div>
  );
}

export default StatisticsPage;
