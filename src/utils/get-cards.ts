import { v4 as uuidv4 } from 'uuid';

import { getRandomInRange } from './get-random-in-range';
import { IGameOptionsState } from './../types/game-options';
import shuffleArray from './shuffle-array';
import { fields, difficulties } from './constants';

const chars = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
];

export const getCards = (options: IGameOptionsState) => {
  const { field, difficulty } = options;
  const cardsNumber = fields[field];
  const charsOnFace = difficulties[difficulty];

  const cards = [];
  for (let i = 0; i < 0.5 * cardsNumber; i += 1) {
    const face = [];

    for (let i = 0; i < charsOnFace; i += 1) {
      const index = getRandomInRange((chars.length - 1), 0);
      face.push(chars[index]);
    }

    cards.push(
      { id: uuidv4(), face: face.join('') },
      { id: uuidv4(), face: face.join('') },
    );
  }

  return shuffleArray(cards);
};
