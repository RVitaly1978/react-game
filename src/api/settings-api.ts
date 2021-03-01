import { $authHost } from './hosts';
import { IGameSettingsState } from './../types/game-settings';

const SETTINGS_ENDPOINT = 'user/settings';

export const setSettings = async (settings: IGameSettingsState) => {
  await $authHost.post(SETTINGS_ENDPOINT, { settings });
};

export const getSettings = async () => {
  const { data } = await $authHost.get(SETTINGS_ENDPOINT);
  return data;
};
