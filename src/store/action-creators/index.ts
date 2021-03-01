import {
  initialization,
} from './init';

import {
  userLogout,
  userRegistration,
  userLogin,
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

export {
  initialization,

  userLogout,
  userRegistration,
  userLogin,

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
};
