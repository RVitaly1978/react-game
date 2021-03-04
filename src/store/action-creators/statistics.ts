import { Dispatch } from 'react';

import { getStatistics, getHighScores } from '../../api/statistics-api';
import {
  StatisticsActionTypes,
  IPayloadUserStatistics,
  StatisticsAction,
  IPayloadUsersHighScores} from '../../types/statistics';

export const setUserStatisticsError = (error: string): StatisticsAction => ({
  type: StatisticsActionTypes.SET_STATISTICS_ERROR,
  payload: {
    statisticsError: error,
  },
});

export const setUserStatistics = (statistics: IPayloadUserStatistics[]): StatisticsAction => ({
  type: StatisticsActionTypes.SET_USER_STATISTICS,
  payload: {
    userStatistics: statistics,
  },
});

export const setUserHighScores = (games: IPayloadUsersHighScores[]): StatisticsAction => ({
  type: StatisticsActionTypes.SET_USERS_HIGH_SCORES,
  payload: {
    usersHighScores: games,
  },
});

export const fetchUserStatistics = () => {
  return async (dispatch: Dispatch<StatisticsAction>) => {
    try {
      const res = await getStatistics();
      dispatch(setUserStatistics(res));
    } catch (e) {
      dispatch(setUserStatisticsError(e.message));
    }
  }
};

export const fetchUsersHighScores = () => {
  return async (dispatch: Dispatch<StatisticsAction>) => {
    try {
      const res = await getHighScores();
      dispatch(setUserHighScores(res));
    } catch (e) {
      dispatch(setUserStatisticsError(e.message));
    }
  }
};
