export const GAME_ROUTE: string = '/';
export const REGISTRATION_ROUTE: string = '/registration';
export const LOGIN_ROUTE: string = '/login';
export const STATISTICS_ROUTE: string = '/statistics';
export const SETTINGS_ROUTE: string = '/settings';

export const THEME_LIGHT: string = 'light';
export const THEME_DARK: string = 'dark';

export interface IOptionsNum {
  [key: string]: number;
};

export interface IOptionsStr {
  [key: string]: string;
};

export const LANG_EN: string = 'en';
export const LANG_RU: string = 'ru';
export const LANG_BE: string = 'be';
export const langs: IOptionsStr = {
  [LANG_EN]: 'en',
  [LANG_RU]: 'ru',
  [LANG_BE]: 'be',
};

export const FIELD_SMALL: string = 'xs';
export const FIELD_BIG: string = 'xxl';
export const fields: IOptionsNum = {
  [FIELD_SMALL]: 18,
  [FIELD_BIG]: 36,
};

export const SPEED_SLOW: string = 'slow';
export const SPEED_FAST: string = 'fast';
export const delays: IOptionsNum = {
  [SPEED_SLOW]: 4000,
  [SPEED_FAST]: 1500,
};

export const DIFFICULTY_EASY: string = 'easy';
export const DIFFICULTY_HARD: string = 'hard';
export const difficulties: IOptionsNum = {
  [DIFFICULTY_EASY]: 1,
  [DIFFICULTY_HARD]: 2,
};

export const footer = {
  authorGitHubLink: 'https://github.com/RVitaly1978',
  authorGitHubText: 'RVitaly1978',
  rssLink: 'https://rs.school/js/',
};
