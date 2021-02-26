import { $authHost } from './hosts';

const STATISTICS_ENDPOINT = 'user/statistics';
const RECORDS_ENDPOINT = 'user/records';

export const getStatistics = async () => {
  const { data: { statistics } } = await $authHost.get(STATISTICS_ENDPOINT);
  return statistics;
};

export const getHighScores = async () => {
  const { data: { games } } = await $authHost.get(RECORDS_ENDPOINT);
  return games;
};
