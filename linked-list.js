/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    if (val === undefined) {
      throw new Error("Invalid value");
    }
    let item = new Node(val);
    if (!this.head) {
      this.head = item;
      this.tail = item;
    } else {
      this.tail.next = item;
      this.tail = item;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let item = new Node(val);
    if (!this.head) {
      this.head = item;
      this.tail = item;
    } else {
      item.next = this.head;
      this.head = item;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      throw new Error("You can't pop() an empty list");
    } else if (this.length === 1) {
      // If there's only one item in the list
      let deletedItem = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return deletedItem.val;
    } else {
      // If there are multiple items in the list
      let currentItem = this.head;
      let previousItem = null;

      // Iterate to the last item
      while (currentItem.next) {
        previousItem = currentItem;
        currentItem = currentItem.next;
      }

      // Update the tail to the second-to-last item
      this.tail = previousItem;
      // Set the next reference of the second-to-last item to null
      this.tail.next = null;

      this.length--;
      return currentItem.val;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      throw new Error("You can't shift() an empty list");
    } else if (this.length === 1) {
      let deletedItem = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return deletedItem.val;
    } else {
      let deletedItem = this.head;
      this.head = deletedItem.next;
      this.length--;
      return deletedItem.val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (!isFinite(idx) || idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    } else {
      let start = this.head;
      let key = 0;
      let indexObj = {
        0: start.val,
      };
      while (start.next) {
        start = start.next;
        key++;
        indexObj[key] = start.val;
      }
      return indexObj[idx];
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (!isFinite(idx) || idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    } else if (idx === 0) {
      let cur = new Node(val);
      cur.next = this.head.next;
      this.head = cur;
    } else {
      let start = this.head;
      let count = 0;
      while (count < idx - 1) {
        count++;
        start = start.next;
      }
      let beforeIdx = start;
      let afterIdx = start.next.next;
      let newNode = new Node(val);
      beforeIdx.next = newNode;
      newNode.next = afterIdx;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (!isFinite(idx) || idx < 0 || idx > this.length) {
      throw new Error("Invalid index");
    } else if (idx === 0) {
      let cur = new Node(val);
      cur.next = this.head;
      this.head = cur;

      if (this.length === 0) {
        this.tail = cur;
        this.length++;
      } else {
        this.length++;
      }
    } else if (idx === this.length) {
      let item = new Node(val);
      this.tail.next = item;
      this.tail = item;
    } else {
      let start = this.head;
      let count = 0;
      while (count < idx - 1) {
        count++;
        start = start.next;
      }
      let beforeIdx = start;
      let afterIdx = start.next;
      let newNode = new Node(val);
      beforeIdx.next = newNode;
      newNode.next = afterIdx;
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (!isFinite(idx) || idx < 0 || idx >= this.length || this.length === 0) {
      throw new Error("Invalid index");
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else if (idx === 0) {
      this.head = this.head.next;
      this.length--;
    } else if (idx === this.length - 1) {
      this.pop();
    } else {
      let start = this.head;
      let count = 0;
      while (count < idx - 1) {
        count++;
        start = start.next;
      }
      let beforeIdx = start;
      let deleted = start.next;
      let afterIdx = start.next.next;
      beforeIdx.next = afterIdx;
      this.length--;
      return deleted.val;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    } else {
      let start = this.head;
      let key = 0;
      let indexObj = {
        0: start.val,
      };
      while (start.next) {
        start = start.next;
        key++;
        indexObj[key] = start.val;
      }
      let listOfKeys = Object.values(indexObj);
      listOfKeys.forEach((eachKey) => {
        if (!isFinite(eachKey)) {
          throw new Error("All items in the list have to be integers");
        }
      });
      const sum = listOfKeys.reduce((acc, num) => acc + num, 0);
      const average = sum / listOfKeys.length;
      return average;
    }
  }
}

// module.exports = LinkedList;
