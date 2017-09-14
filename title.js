module.exports = sentence =>
  sentence
    .split(' ')
    .map(x => x.toLowerCase())
    .map(x => x[0].toUpperCase() + x.slice(1))
    .join(' ');
