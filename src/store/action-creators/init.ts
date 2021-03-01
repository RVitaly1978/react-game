import { ThunkDispatch } from 'redux-thunk';

import { setAllUserSettings } from './settings';
import { check } from '../../api';
import { setInitialLoadingEnd } from './game';
import { setUserAuth, setUserLogout } from './auth';
import { AuthAction, IAuthState } from '../../types/auth';
import { GameSettingsAction } from './../../types/game-settings';
import {
  GameAction,
  IGameState,
  GameActionTypes,
  ISetSavedGame,
} from '../../types/game';

export const setSavedGame = (game: IGameState): ISetSavedGame => ({
  type: GameActionTypes.SET_SAVED_GAME,
  payload: { game },
});

export const initialization = () => {
  return async (dispatch: ThunkDispatch<IAuthState, void, AuthAction | GameAction | GameSettingsAction>) => {
    try {
      const { id, email } = await check();
      dispatch(setUserAuth(id, email));

      const saved = localStorage.getItem('react-game-data');
      if (saved) {
        const data = JSON.parse(saved);
        dispatch(setSavedGame(data.game));
        dispatch(setAllUserSettings(data.settings));
      }
    } catch (e) {
      dispatch(setUserLogout());
    } finally {
      dispatch(setInitialLoadingEnd());
    }
  }
};
