import { toFloat } from '@/lib/to-float';

test.each([
  ['', 0],
  ['aa', NaN],
  ['a1', NaN],
  ['1a', 1],
  ['1', 1],
  ['1 m', 1],
  ['1.2 m', 1.2],
  ['１', 1],
  ['１ m', 1],
  ['１．２ m', 1.2],
])('toFloat', (input, expected) => {
  // when
  const result = toFloat(input);

  // then
  expect(result).toEqual(expected);
});
