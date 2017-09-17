class ArrayList {
  constructor() {
    this.store = [];
  }

  add() {
    const args = Array.prototype.slice.call(arguments);

    // first argument is the item needs to be added
    const item = args[0];

    // second argument is the index in terms of real world (starts from 1 sted of 0)
    // if not defined it goest to the end of the array
    // we also offset it to 0
    let index = args[1] ? args[1] - 1 : this.store.length;

    //if user gives bigger number the actual size of the array it will goto the end of the array
    if (index >= this.store.length + 1) {
      index = this.store.length + 1;
    }

    const arrayLength = this.store.length;

    //we keep the item in an outer var to the loop
    let previousItem = this.store[index];

    //from the point if the given index we moves every item one step towards to the end of the array
    for (let i = index; i < arrayLength; i++) {
      //save the next one
      let temp = this.store[i + 1];
      // assign with the previousItem
      this.store[i + 1] = previousItem;
      //make the new previous
      previousItem = temp;
    }

    //put the item at the given index
    this.store[index] = item;
  }

  remove(index) {
    const arrayLength = this.store.length;

    //moves all the elements towards to the empty spot
    for (let i = index - 1; i < arrayLength; i++) {
      this.store[i] = this.store[i + 1];
    }

    this.store.pop();
  }

  size() {
    return this.store.length;
  }
}

module.exports = { ArrayList };
