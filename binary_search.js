module.exports = (array, item) => {
  function rec(array, item, start, end) {
    const middleIndex = Math.floor((start + end) / 2);
    if (end > start) {
      return -1;
    }
    if (array[middleIndex] === item) {
      return middleIndex;
    }
    if (array[middleIndex] < item) {
      return rec(array, item, middleIndex, end);
    }
    if (array[middleIndex] > item) {
      return rec(array, item, start, middleIndex);
    }
  }

  return rec(array, item, 0, array.length);
};
