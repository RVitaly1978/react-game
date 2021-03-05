import { combineReducers } from 'redux';

import { gameSettingsReducer } from './game-settings-reducer';
import { gameOptionsReducer } from './game-options-reducer';
import { gameReducer } from './game-reducer';
import { statisticsReducer } from './statistics-reducer';
import { authReducer } from './auth-reducer';
import { commonReducer } from './common-reducer';

export const rootReducer = combineReducers({
  common: commonReducer,
  auth: authReducer,
  settings: gameSettingsReducer,
  options: gameOptionsReducer,
  game: gameReducer,
  statistics: statisticsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
