import {
  IStatisticsState,
  StatisticsAction,
  StatisticsActionTypes } from '../../types/statistics';

const initialState: IStatisticsState = {
  usersHighScores: [],
  userStatistics: [],
};

const statisticsReducer = (state = initialState, action: StatisticsAction): IStatisticsState => {
  switch (action.type) {
    case StatisticsActionTypes.SET_USERS_HIGH_SCORES:
      return { ...state, usersHighScores: action.payload };
    case StatisticsActionTypes.SET_USER_STATISTICS:
      return { ...state, userStatistics: action.payload };
    default:
      return state;
  }
};

export default statisticsReducer;
