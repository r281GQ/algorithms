// module.exports = arrays => {
//   return arrays.map(array =>
//     array.reduce((sum, item) => {
//       if (item > sum) return item;
//       return sum;
//     }, 0)
//   );
// };

module.exports = arrays => arrays.map(array => Math.max(...array));
