export enum StatisticsActionTypes {
  SET_USERS_HIGH_SCORES = 'SET_USERS_HIGH_SCORES',
  SET_USER_STATISTICS = 'SET_USER_STATISTICS',
};

export interface ISetUsersHighScores {
  type: StatisticsActionTypes.SET_USERS_HIGH_SCORES;
  payload: any[];
};

export interface ISetUserStatistics {
  type: StatisticsActionTypes.SET_USER_STATISTICS;
  payload: any[];
};

export type StatisticsAction = ISetUsersHighScores | ISetUserStatistics;

export interface IStatisticsState {
  usersHighScores: any[];
  userStatistics: any[];
};
