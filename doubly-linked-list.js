class Node {
  constructor(val) {
    this.prev = null;
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }
  push(val) {
    if (val === undefined) {
      throw new Error("Invalid value");
    }
    let item = new Node(val);
    if (!this.head) {
      this.head = item;
      this.tail = item;
      this.length++;
    } else {
      this.tail.next = item;
      item.prev = this.tail;
      this.tail = item;
      this.length++;
    }
  }
  display() {
    let result = [];
    let current = this.head;

    while (current) {
      result.push(current.val);
      current = current.next;
    }

    return result;
  }
  reverse() {
    if (this.length === 0) {
      throw new Error("This is an empty list!");
    }
    let current = this.head;
    while (current) {
      // swap prev and next pointers for each node
      let previous = current.prev;
      current.prev = current.next;
      current.next = previous;

      current = current.prev;
    }
    let start = this.head;
    this.head = this.tail;
    this.tail = start;
  }
}
