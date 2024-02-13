import { parseNumericRange } from '@/lib/parse-numeric-range';

test.each([
  ['{0}', []],
  ['{0-2}', [1, 2]],
  ['1', [1]],
  [' 1 - 2 ', [1, 2]],
  ['1-3', [1, 2, 3]],
  ['3-5', [3, 4, 5]],
  ['1,3-5, 8,  9-10', [1, 3, 4, 5, 8, 9, 10]],
])('parseNumericRange', (input, expected) => {
  // when
  const result = parseNumericRange(input);

  // then
  expect(result).toEqual(expected);
});
