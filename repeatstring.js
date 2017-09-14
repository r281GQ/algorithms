module.exports = (str, number) =>
  typeof number !== 'number' || number <= 0 ? '' : str.repeat(number);
