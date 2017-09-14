module.exports = array => {
  const source = array.slice();

  const destination = [];
  for (let j = 0; j < source.length; j++) {
    let temp;
    let indexOfTemp;
    for (let i = 0; i < source.length; i++) {
      if (i === 0) {
        temp = source[i];
        indexOfTemp = i;
      }

      if (source[i] < temp) {
        temp = source[i];
        indexOfTemp = i;
      }
    }

    destination.push(temp);
    source[indexOfTemp] = 10000000;
  }

  return destination;
};
