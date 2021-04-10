import {
  IStatisticsState, StatisticsAction, StatisticsActionTypes,
} from '../../types/statistics';

const initialState: IStatisticsState = {
  usersHighScores: [],
  userStatistics: [],
};

export const statisticsReducer = (state = initialState, action: StatisticsAction): IStatisticsState => {
  switch (action.type) {
    case StatisticsActionTypes.SET_USERS_HIGH_SCORES:
    case StatisticsActionTypes.SET_USER_STATISTICS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
