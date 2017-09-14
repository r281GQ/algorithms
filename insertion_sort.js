module.exports = array => {
  const source = array.slice();

  let destination = [];

  const makeSpace = (destination, source) => {
    const copy = destination.slice();
    for (let i = 0; i < copy.length; i++) {
      if (source < copy[i]) {
        let beg = copy.slice(0, i);
        let end = copy.slice(i);
        end.unshift(source);
        beg.push(...end);
        return beg;
      }
    }
    copy.push(source);
    return copy;
  };

  for (let i = 0; i < source.length; i++) {
    destination = makeSpace(destination, source[i]);
  }

  return destination;
};
