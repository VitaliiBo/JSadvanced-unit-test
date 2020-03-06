/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import Character from './character';

const character1 = new Character('Мечник', 90);
const character2 = new Character('Маг', 100);
const character3 = new Character('Лучник', 50);

const allCharacters = [
  character1,
  character2,
  character3,
];

// eslint-disable-next-line import/prefer-default-export
export function charSort(characters) {
  return characters.sort((next, prev) => prev.health - next.health);
}
