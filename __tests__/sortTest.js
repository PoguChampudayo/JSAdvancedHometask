import { sortInfo, getSpecials } from '../src';

test('should sort properly', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const fields = ['name', 'level'];
  expect(sortInfo(obj, fields)).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('should get characters specials', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };
  expect(getSpecials(character)).toEqual([
    {
      id: 8, name: 'Двойной выстрел', description: 'Двойной выстрел наносит двойной урон', icon: 'http://...',
    },
    {
      id: 9, name: 'Нокаутирующий удар', description: 'Описание недоступно', icon: 'http://...',
    },
  ]);
});
