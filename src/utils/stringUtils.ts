const parseNumberStringToInt = (numString: string = '', fallback: number): number => {
  const parsedInt = parseInt(numString, 10);
  return Number.isNaN(parsedInt) ? fallback : parsedInt;
};

export { parseNumberStringToInt };
