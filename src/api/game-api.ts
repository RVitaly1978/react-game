import { IGameOptionsState } from '../types/game-options';
import { IGameSettingsState } from '../types/game-settings';
import { $authHost } from './hosts';

const GAME_ENDPOINT = '/user/game';

export interface IGameResult {
  time: number,
  moves: number,
  field: string,
  speed: string,
  difficulty: string,
  userNick: string,
};

export const saveResults = async (
  result: IGameResult, settings: IGameSettingsState, options: IGameOptionsState
) => {
  try {
    await $authHost.post(GAME_ENDPOINT, { result, settings, options });
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};
