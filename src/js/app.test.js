/* eslint-disable linebreak-style */
import Character from './character';
import { charSort } from './app';

test('creates player and gets health status', () => {
  const testPlayer = new Character('test', 55);
  testPlayer.hit(10);
  expect(testPlayer.healthStatus()).toBe('wounded');
});

test('', () => {
  const testPlayer = new Character('test', 10);
  expect(testPlayer.healthStatus()).toBe('critical');
});

test('', () => {
  const testPlayer = new Character('test', 60);
  expect(testPlayer.healthStatus()).toBe('healthy');
});

test('checking sort of characters', () => {
  const characters = [new Character('Лучник', 50), new Character('Маг', 100), new Character('Мечник', 90)];
  const sortedCharacters = charSort(characters);
  expect(characters).toEqual(sortedCharacters);
});
