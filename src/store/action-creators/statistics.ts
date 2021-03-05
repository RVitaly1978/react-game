import { ThunkDispatch } from 'redux-thunk';

import { getStatistics, getHighScores } from '../../api/statistics-api';
import { CommonAction } from '../../types/common';
import { setStatisticsFetching, setStatisticsFetchingError } from './common';
import {
  StatisticsActionTypes, IPayloadStatistics, StatisticsAction, IStatisticsState,
} from '../../types/statistics';

export const setUserStatistics = (userStatistics: IPayloadStatistics[]): StatisticsAction => ({
  type: StatisticsActionTypes.SET_USER_STATISTICS,
  payload: { userStatistics },
});

export const setUserHighScores = (usersHighScores: IPayloadStatistics[]): StatisticsAction => ({
  type: StatisticsActionTypes.SET_USERS_HIGH_SCORES,
  payload: { usersHighScores },
});

// thunk creators --------------------------------------------

export const fetchUserStatistics = () => {
  return async (dispatch: ThunkDispatch<
    IStatisticsState, void, StatisticsAction | CommonAction>) => {
    try {
      dispatch(setStatisticsFetching(true));
      const res = await getStatistics();
      dispatch(setUserStatistics(res));
    } catch (e) {
      dispatch(setStatisticsFetchingError(e.message));
    } finally {
      dispatch(setStatisticsFetching(false));
    }
  }
};

export const fetchUsersHighScores = () => {
  return async (dispatch: ThunkDispatch<
    IStatisticsState, void, StatisticsAction | CommonAction>) => {
    try {
      dispatch(setStatisticsFetching(true));
      const res = await getHighScores();
      dispatch(setUserHighScores(res));
    } catch (e) {
      dispatch(setStatisticsFetchingError(e.message));
    } finally {
      dispatch(setStatisticsFetching(false));
    }
  }
};
