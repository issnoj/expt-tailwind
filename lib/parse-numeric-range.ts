export const parseNumericRange = (range: string): number[] => {
  return range
    .replace(/[{}]/g, '')
    .split(',')
    .flatMap((range) => {
      const [start, end] = range.split('-').map(Number);
      if (!isNaN(start) && !isNaN(end)) {
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
      }
      return !isNaN(start) ? [start] : [];
    })
    .filter((v) => v > 0);
};
