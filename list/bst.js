class BinarySearchTree {
  constructor() {
    this.root = undefined;
  }

  /**
   * Through the tree searches for the node containing the given value.
   * If value is present in the tree returns the containing Node otherwise returns null.
   * @param  {Number} value [The value to look for.]
   * @return {Node}       [The Node containing the value.]
   */
  find(value) {
    //Recursive function traversing the tree.
    function findHelper(node, value) {
      //The value is found return the node
      if (node.item === value) return node;

      //if it is lesser then the node's value explore left subtree
      if (value < node.item) {
        //if there is no item, item does not exists return null, otherwise traverse the subtree
        return node.leftChild ? findHelper(node.leftChild, value) : null;
      }

      if (value > node.item) {
        return node.rightChild ? findHelper(node.rightChild, value) : null;
      }
    }

    return findHelper(this.root, value);
  }

  /**
   * Deletes the value from the tree
   * @param  {[Number]} item [The item needs to be deleted.]
   */
  delete(item) {
    const findMin = node => (!node.leftChild ? node : findMin(node.leftChild));

    function deleteHelper(node, item) {
      if (node === undefined) return node;
      else if (item < node.item) {
        //recursively finds the left subtree
        node.leftChild = deleteHelper(node.leftChild, item);
        return node;
      } else if (item > node.item) {
        //recursively finds the right subtree
        node.rightChild = deleteHelper(node.rightChild, item);
        return node;
      } else {
        //if there are no children simply delete the item
        if (!node.leftChild && !node.rightChild) {
          return undefined;
        } else if (!node.leftChild && node.rightChild) {
          //skip the item if there is only one child
          node = node.rightChild;
          return node;
        } else if (node.leftChild && !node.rightChild) {
          //skip the item if there is only one child
          node = node.leftChild;
          return node;
        } else {
          //call recursively delete method
          node.item = findMin(node.rightChild).item;
          node.rightChild = deleteHelper(node.rightChild, node.item);
          return node;
        }
      }
    }

    deleteHelper(this.root, item);
  }

  /**
   * Rebalances the tree to have the minimum height.
   * @return {Void} []
   */
  reBalance() {
    //container for the array representation of the tree;
    const sortedContainer = [];

    //helper function to recursively perform a DFS and retain an array representation
    //of the tree
    function inOrderTraversal(
      { leftChild, rightChild, item },
      sortedContainer
    ) {
      if (leftChild) {
        inOrderTraversal(leftChild, sortedContainer);
      }

      sortedContainer.push(item);

      if (rightChild) {
        inOrderTraversal(rightChild, sortedContainer);
      }
    }

    if (this.root.leftChild)
      inOrderTraversal(this.root.leftChild, sortedContainer);
    sortedContainer.push(this.root.item);
    if (this.root.rightChild)
      inOrderTraversal(this.root.rightChild, sortedContainer);

    //recursively builds up the tree using binary search
    function buildTree(start, end) {
      const middle = Math.floor((start + end) / 2);
      console.log(start, end, middle);
      if (end < start) {
        return;
      }
      newBST.add(sortedContainer[middle]);
      buildTree(start, middle - 1);
      buildTree(middle + 1, end);
    }

    const start = 0;
    const end = sortedContainer.length - 1;
    const middleIndex = Math.floor((start + end) / 2);

    const balancedTree = new BinarySearchTree();

    balancedTree.add(sortedContainer[middleIndex]);

    buildTree(start, middleIndex - 1);
    buildTree(middleIndex + 1, end);

    //assign the new created tree root to the current instance
    this.root = balancedTree.root;
  }

  /**
   * Attaches the value to a new Node in tree maintaining the balanced tree characterisits.
   * @param {[Number]} value [Value to be added.]
   */
  add(value) {
    if (!this.root) {
      return (this.root = new Node(value, undefined, undefined));
    }

    function findNode(node, value) {
      if (node.item < value) {
        if (!node.rightChild)
          return (node.rightChild = new Node(value, undefined, undefined));
        return findNode(node.rightChild, value);
      } else {
        if (!node.leftChild)
          return (node.leftChild = new Node(value, undefined, undefined));
        return findNode(node.leftChild, value);
      }
    }

    return findNode(this.root, value);
  }

  /**
   * Return the maximum value in the tree.
   * @return {[Number]} [Maximum value.]
   */
  ceil() {
    const findMax = ({ rightChild, item }) =>
      !rightChild ? item : findMax(rightChild);

    return this.root ? findMax(this.root) : undefined;
  }

  /**
   * Returns the minimum value in the tree.
   * @return {[Number]} [Minimum value.]
   */
  floor() {
    const findMin = ({ leftChild, item }) =>
      !leftChild ? item : findMin(leftChild);

    return this.root ? findMin(this.root) : undefined;
  }

  /**
   * Traverses the tree in level order. The function provided will be called on every item in level order.
   * If there is no function the values will be printed to the console.
   * @param  {[Function]} func [Function to be called with the values. Reference 'this' set to the tree instance.]
   * @return {[Void]}      []
   */
  breadthFirstSearch(func) {
    if (!func || !(typeof func === 'function')) func = console.log;

    const queue = [];

    queue.unshift(this.root);

    while (queue.length !== 0) {
      const { leftChild, rightChild, item } = queue.pop();
      func.call(this, item);
      if (leftChild) {
        queue.unshift(leftChild);
      }
      if (rightChild) {
        queue.unshift(rightChild);
      }
    }
  }

  /**
   * Traverses the tree in one of the following order: PRE, IN, POST.
   * The function provided will be called on every item.
   * If there is no function the values will be printed to the console.
   * If there is no order provided INORDER traversal will be used.
   * @param  {[Function]} func  [Function to be called with the values. Reference 'this' set to the tree instance.]
   * @param  {[String]} order [It can be 'PRE', 'IN' or 'POST'.]
   * @return {[Void]}       []
   */
  depthFirstSearch(func, order) {
    if (!func || !(typeof func === 'function')) func = console.log;
    if (!order || (order !== 'PRE' && order !== 'IN' && order !== 'POST'))
      order = 'IN';

    function helper({ leftChild, rightChild, item }) {
      if (order === 'PRE') func.call(this, item);

      if (leftChild) helper(leftChild);

      if (order === 'IN') func.call(this, item);

      if (rightChild) helper(rightChild);

      if (order === 'POST') func.call(this, item);
    }

    helper(this.root);
  }

  /**
   * Determines whether the tree is a binary search tree.
   * @return {Boolean} [Binary search tree or not.]
   */
  isBinarySearchTree() {
    function isBASThelpermin({ leftChild, rightChild, item }, value) {
      let left;
      let right;

      if (leftChild) {
        //we need the check the subtree is a BST and also the current tree satisfies the condition or not
        left = isBASThelpermin(leftChild, item) && leftChild.item < item;
        // console.log(left);
      } else {
        // Base case, if there is no child we can consider that part of the node to be a BST
        left = true;
      }
      if (rightChild) {
        //we need the check the subtree is a BST and also the current tree satisfies the condition or not
        right = isBASThelpermin(rightChild, item) && rightChild.item > item;
        //  console.log(right);
      } else {
        // Base case, if there is no child we can consider that part of the node to be a BST
        right = true;
      }

      //for the current tree both sides must met the condition of the BST
      return left && right;
    }

    return (
      isBASThelpermin(this.root.leftChild) &&
      this.root.leftChild.item < this.root.item &&
      isBASThelpermin(this.root.rightChild) &&
      this.root.rightChild.item > this.root.item
    );
  }

  /**
   * Return the height of the tree, how many edges are there from the root to the deepest leaf node.
   * @return {[Number]} [Height of the tree.]
   */
  height() {
    function findHeight({ leftChild, rightChild, item }, counter) {
      if (!leftChild && !rightChild) {
        //if there are no more edges return the current edge counter
        return counter;
      } else {
        let rightHeight = 0;
        let leftHeight = 0;

        //if there is a left side explore the subtree with the edges incremented by 1
        if (leftChild) leftHeight = findHeight(leftChild, counter + 1);

        //if there is a right side explore the subtree with the edges incremented by 1
        if (rightChild) rightHeight = findHeight(rightChild, counter + 1);

        //return the deepest subtree height
        return Math.max(leftHeight, rightHeight);
      }
    }

    return findHeight(this.root, 0);
  }

  /**
   * Determines if the tree is balanced.
   * @return {Boolean} [Balanced.]
   */
  isBalanced() {
    function findHeight({ leftChild, rightChild, item }, counter) {
      if (!leftChild && !rightChild) {
        //if there are no more edges return the current edge counter
        return counter;
      } else {
        let rightHeight = 0;
        let leftHeight = 0;

        //if there is a left side explore the subtree with the edges incremented by 1
        if (leftChild) leftHeight = findHeight(leftChild, counter + 1);

        //if there is a right side explore the subtree with the edges incremented by 1
        if (rightChild) rightHeight = findHeight(rightChild, counter + 1);

        //return the deepest subtree height
        return Math.max(leftHeight, rightHeight);
      }
    }

    return (
      Math.abs(
        (this.root.leftChild ? findHeight(this.root.leftChild, 1) : 0) -
          (this.root.rightChild ? findHeight(this.root.rightChild, 1) : 0)
      ) < 2
    );
  }
}

class Node {
  constructor(item, leftChild, rightChild) {
    this.item = item;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

module.exports = { BinarySearchTree };
