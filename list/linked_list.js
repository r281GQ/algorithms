class LinkedList {
  constructor() {
    this.header = undefined;
  }

  add(item) {
    if (!this.header) {
      this.header = new Node(item);
    } else {
      let end = this.header;
      while (end.next) {
        end = end.next;
      }
      end.next = new Node(item);
    }
  }

  addB(item) {
    if (!this.header) {
      this.header = new Node(item);
    } else {
      let g = new Node(item, this.header);
      this.header = g;
    }
  }

  addD(item, index) {
    if (!this.header) {
      this.header = new Node(item);
    } else {
      let counter = 1;
      let end = this.header;
      let prev = this.header;
      while (end.next) {
        if (index === counter) {
          console.log(2342);
          console.log(end);
          let f = new Node(item, end);
          prev.next = f;
          return;
        }
        prev = end;
        counter++;
        // g.push(end.item);
        end = end.next;
      }
    }
  }

  remove(index) {
    if (!this.header) {
      this.header = new Node(item);
    } else {
      let counter = 1;
      let end = this.header;
      let prev = this.header;
      while (end.next) {
        if (index === counter) {
          // console.log(2342);
          // console.log(end);

          prev.next = prev.next.next;
          return;
        }
        prev = end;
        counter++;
        // g.push(end.item);
        end = end.next;
      }
    }
  }

  reverse() {
    let current = this.header;
    let prev = undefined;
    let next = undefined;
    while (current.next) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    current.next = prev;
    this.header = current;
  }

  reverseRecursive() {
    let current = this.header;
    let prev = undefined;
    let next = undefined;
    function recursive(current, next, prev) {
      const fd = current.item
      if (!current.next) {
        current.next = prev;
        return current;
      }
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      const f = recursive(current, next, prev);
      console.log(f);
      return f;
    }

    this.header = recursive(current, next, prev);
  }

  traverse() {
    let g = [];
    let end = this.header;
    while (end.next) {
      g.push(end.item);
      end = end.next;
    }
    g.push(end.item);
    console.log(g);
    return g;
  }
}

class Node {
  constructor(item, next) {
    this.item = item;
    this.next = next;
  }
}

module.exports = { LinkedList };
