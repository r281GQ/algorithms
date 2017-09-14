module.exports = array => {
  const source = array.slice();

  function mergeSort(source) {
    return source.length < 2
      ? source
      : merge(
          mergeSort(source.slice(0, source.length / 2)),
          mergeSort(source.slice(source.length / 2))
        );
  }

  const merge = (first, second) => {
    const target = [];
    let firstIndex = 0;
    let secondIndex = 0;
    for (let i = 0; i < first.length + second.length; i++) {
      if (
        first[firstIndex] &&
        (second[secondIndex] > first[firstIndex] || !second[secondIndex])
      ) {
        target.push(first[firstIndex]);
        firstIndex++;
      }

      if (
        second[secondIndex] &&
        (first[firstIndex] > second[secondIndex] || !first[firstIndex])
      ) {
        target.push(second[secondIndex]);
        secondIndex++;
      }
    }
    return target;
  };

  return mergeSort(source);
};
