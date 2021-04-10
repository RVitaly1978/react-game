import { $authHost } from './hosts';

const STATISTICS_ENDPOINT = 'user/statistics';
const RECORDS_ENDPOINT = 'user/records';

export const getStatistics = async () => {
  try {
    const { data } = await $authHost.get(STATISTICS_ENDPOINT);
    return data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

export const getHighScores = async () => {
  try {
    const { data } = await $authHost.get(RECORDS_ENDPOINT);
    return data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};
