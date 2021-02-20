import { combineReducers } from 'redux';

import gameSettingsReducer from './game-settings-reducer';
import gameReducer from './game-reducer';
import statisticsReducer from './statistics-reducer';
import authReducer from './auth-reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  gameSettings: gameSettingsReducer,
  game: gameReducer,
  statistics: statisticsReducer,
});
