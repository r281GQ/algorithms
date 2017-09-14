const swap = (arr, source, dest) => {
  const temp = arr[source]
  arr[source] = arr[dest]
  arr[dest] = temp;
}


module.exports = array => {
  const source = array.slice();

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source.length-i; j++) {
      if(source[j] > source[j+1]){
        swap(source, j, j +1)
      }
    }
  }

  return source
};
