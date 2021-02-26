export enum StatisticsActionTypes {
  SET_USERS_HIGH_SCORES = 'SET_USERS_HIGH_SCORES',
  SET_USER_STATISTICS = 'SET_USER_STATISTICS',
  SET_STATISTICS_ERROR = 'SET_STATISTICS_ERROR',
};

export interface IPayloadUserStatistics {
  _id: string;
  date: Date;
  time?: number;
  score?: number;
};

export interface IPayloadUsersHighScores {
  _id: string;
  email: string;
  date: Date;
  time?: number;
  score?: number;
};

export interface ISetStatisticsError {
  type: StatisticsActionTypes.SET_STATISTICS_ERROR;
  payload: {
    statisticsError: null | string;
  };
};

export interface ISetUsersHighScores {
  type: StatisticsActionTypes.SET_USERS_HIGH_SCORES;
  payload: {
    usersHighScores: IPayloadUsersHighScores[];
  };
};

export interface ISetUserStatistics {
  type: StatisticsActionTypes.SET_USER_STATISTICS;
  payload: {
    userStatistics: IPayloadUserStatistics[];
  };
};

export type StatisticsAction = ISetUsersHighScores | ISetUserStatistics | ISetStatisticsError;

export interface IStatisticsState {
  usersHighScores: IPayloadUsersHighScores[];
  userStatistics: IPayloadUserStatistics[];
  statisticsError: null | string;
};
