export const GAME_ROUTE: string = '/';
export const REGISTRATION_ROUTE: string = '/registration';
export const LOGIN_ROUTE: string = '/login';
export const STATISTICS_ROUTE: string = '/statistics';
export const SETTINGS_ROUTE: string = '/settings';

interface IOptions {
  [key: string]: number;
};

export const FIELD_SMALL: string = 'xs';
export const FIELD_BIG: string = 'xxl';
export const fields: IOptions = {
  FIELD_SMALL: 18,
  FIELD_BIG: 36,
};

export const SPEED_SLOW: string = 'slow';
export const SPEED_FAST: string = 'fast';
export const delays: IOptions = {
  SPEED_SLOW: 3000,
  SPEED_FAST: 1000,
};

export const footer = {
  authorGitHubLink: 'https://github.com/RVitaly1978',
  authorGitHubText: 'RVitaly1978',
  rssLink: 'https://rs.school/js/',
};
