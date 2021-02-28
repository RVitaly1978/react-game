import {
  userLogout,
  userRegistration,
  userLogin,
  checkUserLogged,
} from './auth';

import {
  setInitialLoadingEnd,
  setNewGame,
  setIsEndGame,
  setIsPauseGame,
  setTimeCount,
  setMoveCount,
  setGamePair,
  setGameFlipped,
  setGameInactive,
  setGameTic,
  // setCardClicked,
} from './game';

import {
  fetchUserStatistics,
  fetchUsersHighScores,
} from './statistics';

export {
  userLogout,
  userRegistration,
  userLogin,
  checkUserLogged,

  fetchUserStatistics,
  fetchUsersHighScores,

  setInitialLoadingEnd,
  setNewGame,
  setIsEndGame,
  setIsPauseGame,
  setTimeCount,
  setMoveCount,
  setGamePair,
  setGameFlipped,
  setGameInactive,
  setGameTic,
  // setCardClicked,
};
