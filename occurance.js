module.exports = (array, item, isFirst) => {
  let startIndex = 0;
  let endIndex = array.length;

  let result = -1;

  while (endIndex > startIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    // console.log(middleIndex);
    if (array[middleIndex] === item) {
      //do not return the index, just save it and refresh it if that finds any more
      result = middleIndex;
      //keep searninh for either direction
      if (isFirst) {
        startIndex = middleIndex;
      } else {
        endIndex = middleIndex;
      }
    }
    if (array[middleIndex] < item) {
      startIndex = middleIndex - 1;
    }

    if (array[middleIndex] > item) {
      endIndex = middleIndex - 1;
    }
  }
  return result;
};
