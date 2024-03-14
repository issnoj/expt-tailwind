export const toHalfNumber = (str: string): string => {
  return str.replace(/[０-９．]/g, (char) => {
    return char === '．'
      ? '.'
      : String.fromCharCode(char.charCodeAt(0) - 0xfee0);
  });
};

export const toFloat = (str: string): number => {
  str = toHalfNumber(str);
  if (str === '') return 0;
  return parseFloat(toHalfNumber(str));
};
