import { combineReducers } from 'redux';

import { gameSettingsReducer } from './game-settings-reducer';
import { gameOptionsReducer } from './game-options-reducer';
import { gameReducer } from './game-reducer';
import { statisticsReducer } from './statistics-reducer';
import { authReducer } from './auth-reducer';
import { initReducer } from './init-reducer';

export const rootReducer = combineReducers({
  init: initReducer,
  auth: authReducer,
  settings: gameSettingsReducer,
  options: gameOptionsReducer,
  game: gameReducer,
  statistics: statisticsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
