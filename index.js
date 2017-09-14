const titleCase = require('./title');
const arrays = require('./largest_from_arrays');
const end = require('./confirms_ending');
const multiply = require('./repeatstring');
const truncate = require('./truncate');
const chunky = require('./chunky');
const slasher = require('./slasher');
const mutation = require('./mutation');
const bouncer = require('./bouncer');
const destroyer = require('./destroyer');
const selecrionSort = require('./selection_sort');
const bubble_sort = require('./bubble_sort');
const insertionSort = require('./insertion_sort');
const mergeSort = require('./merge_sort');
const quickSort = require('./quicksort');
const binarySearch = require('./binary_search');

// console.log(titleCase('i am a teApot'));
//
// console.log(
//   arrays([
//     [13, 27, 18, 26],
//     [4, 5, 1, 3],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1]
//   ])
// );

// console.log(end('Bastian', 'n'));
// console.log(multiply('Bastian', 3));
// console.log(truncate('A-tisket a-tasket A green and yellow basket', 11));
// console.log(chunky(["a", "b", "c", "d"], 2));
// console.log(slasher([1, 2, 3], 2));
// console.log(mutation(["hello", "he"]))
// console.log(bouncer([7, "ate", "", false, 9]))
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
//
//
// console.log(selecrionSort([3,7,9,2,5,6,7]));
// console.log(bubble_sort([3,7,9,2,5,6,7]));
//
//
//
//

// 72168534
// console.log(insertionSort([3,7,9,2,5,6,7]));
// console.log(mergeSort([3,11,9,2,74,6,7]));
// console.log(quickSort([3,11,9,2,74,6,7]));
// console.log(mergeSort([3,7,9,2,5,6,7]));
// console.log(mergeSort([3,7,1]));
console.log(binarySearch(quickSort([7, 2, 1, 6, 8, 5, 3, 4]), 9));
