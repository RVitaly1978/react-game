import { $authHost } from './hosts';
import { IGameSettingsState } from './../types/game-settings';
import { IGameOptionsState } from '../types/game-options';

const OPTIONS_ENDPOINT = 'user/options';

export const setOptions = async (options: IGameOptionsState, settings: IGameSettingsState) => {
  try {
    await $authHost.post(OPTIONS_ENDPOINT, { options, settings });
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};
