module.exports = arr => {
  const lowerCased = arr.map(x => x.toLowerCase());

  let currentIndex = 0;

  while (lowerCased[1].length > currentIndex) {
    if (!lowerCased[0].includes(lowerCased[1][currentIndex])) return false;
    currentIndex++;
  }

  return true;
};


// mutation(["hello", "hey"]);
