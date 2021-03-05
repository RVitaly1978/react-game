export enum StatisticsActionTypes {
  SET_USERS_HIGH_SCORES = 'SET_USERS_HIGH_SCORES',
  SET_USER_STATISTICS = 'SET_USER_STATISTICS',
};

export interface IPayloadStatistics {
  date: Date;
  difficulty: string;
  email: string;
  field: string;
  moves: number;
  owner: string;
  speed: string;
  time: number;
  userNick: string;
  _id: string;
};

export interface ISetUsersHighScores {
  type: StatisticsActionTypes.SET_USERS_HIGH_SCORES;
  payload: {
    usersHighScores: IPayloadStatistics[];
  };
};

export interface ISetUserStatistics {
  type: StatisticsActionTypes.SET_USER_STATISTICS;
  payload: {
    userStatistics: IPayloadStatistics[];
  };
};

export type StatisticsAction = ISetUsersHighScores | ISetUserStatistics;

export interface IStatisticsState {
  usersHighScores: IPayloadStatistics[];
  userStatistics: IPayloadStatistics[];
};
