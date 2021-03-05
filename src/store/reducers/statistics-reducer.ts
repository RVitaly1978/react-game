import {
  IStatisticsState,
  StatisticsAction,
  StatisticsActionTypes } from '../../types/statistics';

const initialState: IStatisticsState = {
  usersHighScores: [],
  userStatistics: [],
  statisticsError: null,
};

export const statisticsReducer = (state = initialState, action: StatisticsAction): IStatisticsState => {
  switch (action.type) {

    case StatisticsActionTypes.SET_USERS_HIGH_SCORES:
      return { ...state, ...action.payload, statisticsError: null };

    case StatisticsActionTypes.SET_USER_STATISTICS:
      return { ...state, ...action.payload, statisticsError: null };

    case StatisticsActionTypes.SET_STATISTICS_ERROR:
      return { ...initialState, ...action.payload };

    default:
      return state;
  }
};
