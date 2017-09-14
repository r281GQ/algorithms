module.exports = array => {
  const source = array.slice();

  const swap = (arr, source, dest) => {
    const temp = arr[source];
    arr[source] = arr[dest];
    arr[dest] = temp;
  };

  function sort(array, startIndex, endIndex) {
    // console.log(array[endIndex]);
    if (endIndex > startIndex) {
      const number = partition(array, startIndex, endIndex);
      // console.log(number);
      sort(array, 0, number - 1);
      sort(array, number + 1, endIndex);
    }
  }

  const partition = (array, startIndex, endIndex) => {
    // console.log(array, startIndex, endIndex);
    let pivot = array[endIndex];
    let pIndex = startIndex;
    for (let i = startIndex; i < endIndex ; i++) {
      if (array[i] < pivot) {
        swap(array, i, pIndex);
        pIndex++;
      }
    }

    swap(array, pIndex, endIndex);
    // console.log(array);
    return pIndex;
  };
  sort(source, 0, source.length - 1);
  return source;
};
