import {
  initialization,
} from './init';

import {
  userLogout,
  userRegistration,
  userLogin,
  setUserAuthError,
} from './auth';

import {
  setInitialLoadingEnd,
  setNewGame,
  setIsEndGame,
  setIsPauseGame,
  updateTimeCount,
  setMoveCount,
  setGamePair,
  setGameFlipped,
  setGameInactive,
  setGameTic,
  setIsGameInProgress,
  pauseGame,
} from './game';

import {
  fetchUserStatistics,
  fetchUsersHighScores,
} from './statistics';

import {
  setAllUserSettings,
  saveUserSettings,
} from './settings';

export {
  initialization,

  userLogout,
  userRegistration,
  userLogin,
  setUserAuthError,

  fetchUserStatistics,
  fetchUsersHighScores,

  setInitialLoadingEnd,
  setNewGame,
  setIsEndGame,
  setIsPauseGame,
  updateTimeCount,
  setMoveCount,
  setGamePair,
  setGameFlipped,
  setGameInactive,
  setGameTic,
  setIsGameInProgress,
  pauseGame,

  setAllUserSettings,
  saveUserSettings,
};
