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

  setAllUserSettings,
  saveUserSettings,
};
