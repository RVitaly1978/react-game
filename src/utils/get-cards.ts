import { IGameOptionsState } from './../types/game-options';
import shuffleArray from './shuffle-array';
import { cards } from './cards';
import { fields } from './constants';

export const getCards = (options: IGameOptionsState) => {
  const { field } = options;
  const gameCards = cards.slice(0, fields[field]);

  return shuffleArray(gameCards);
};
