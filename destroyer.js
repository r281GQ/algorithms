module.exports = function() {
  const args = Array.prototype.slice.call(arguments);

  const baseArray = args[0];

  const mathers = args.slice(1);

  return baseArray.filter(item => !mathers.includes(item));
};
