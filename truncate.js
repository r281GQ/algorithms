module.exports = (str, num) => {
  if (num <= 3) {
    return str.substr(0, num) + '...';
  }
  return str.length <= num ? str : str.substr(0, num - 3) + '...';
};
