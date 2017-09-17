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
const occurance = require('./occurance');

const { ArrayList } = require('./list/array_list');
const { LinkedList } = require('./list/linked_list');
const { BinarySearchTree } = require('./list/bst');

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
// console.log(binarySearch(quickSort([7, 2, 1, 6, 8, 5, 3, 4]), 9));
// console.log(occurance(quickSort([7, 2, 1, 1, 8, 5, 3, 4]), 1 ));
// console.log(occurance(quickSort([7, 2, 1, 1, 8, 5, 3, 4]), 1, true ));
//
//

// const f = new ArrayList();
const l = new LinkedList();
//
// f.add(1);
// f.add(5);
// f.add(7);
// f.add(9);
//
// f.add(10,2)
//
// // f.remove(2)
//
// console.log(f);
// l.add(1);
// l.add(5);
// l.add(7);
// l.add(9);
//
// l.addB(2);
//
//
//
// // l.traverse()
//
//
// l.addD(11, 3)
//
// // l.traverse()
//
// l.remove(3);
// // l.traverse()
// // l.reverse()
// l.reverseRecursive()

// l.traverse()
// console.log(l);
// f.remove(2)

// console.log();
//
//
//
const bst = new BinarySearchTree();

bst.add(15);
bst.add(10);
bst.add(20);
bst.add(22);
bst.add(14);
bst.add(2);
// bst.add(1);
bst.add(1);
// bst.add(1);
// bst.add(1);
bst.add(18);
bst.add(16);
bst.add(43);
bst.add(23);
bst.add(19);
bst.add(17);
bst.add(21);





// bst.add(22);
// bst.add(20);
// bst.add(18);
// bst.add(15);
// bst.add(14);
// bst.add(10);
// bst.add(2);
// // bst.add(1);
// bst.add(1);
// // bst.add(1);
// bst.add(1);


// console.log(bst.ceil());
// console.log(bst.height());
// bst.

const first = true;
const second = true;

// const g = first === false && second === false
//
// const d = !(first && second)
//
// console.log(g, d);

// const g = !(false && true)
// bst.root.leftChild.leftChild = 56;
// console.log(bst.isBST())

// //
// console.log(bst);
// console.log(bst.isBanalnced());
// console.log(bst.balance());
// console.log(bst.isBanalnced());
// console.log(bst.find(23));
//
// //
// bst.add(24)
// console.log(bst.delete(22));
// console.log(bst.find(22));
//
//
// (bst.dfs(console.log));
//
// bst.breadthFirstSearch()
// console.log(bst.height());
// console.log(bst.isBalanced());
// bst.depthFirstSearch()
// console.log(bst.root);

// console.log(bst.find(18));
// console.log(bst.floor());
// bst.depthFirstSearch()
bst.delete(16);
// console.log(bst.root);
// console.log(bst.find(21).item = 3);
bst.depthFirstSearch()
console.log(bst.isBinarySearchTree());
