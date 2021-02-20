import { combineReducers } from 'redux';

import gameOptionsReducer from './game-options-reducer';

export const rootReducer = combineReducers({
  gameOptions: gameOptionsReducer,
});
