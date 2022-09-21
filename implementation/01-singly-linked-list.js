// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new SinglyLinkedNode(val);

    this.length++;

    newNode.next = this.head;

    this.head = newNode;

    return this;
    // Write your hypothesis on the time complexity of this method here
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!

    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      return this.addToHead(val);
    }

    this.length++;
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;

    return this;

    // Write your hypothesis on the time complexity of this method here
  }

  removeFromHead() {
    if (!this.head) {
      return;
    }

    let rmv = this.head;
    this.head = this.head.next;
    this.length--;

    return rmv;

    // Write your hypothesis on the time complexity of this method here
  }

  removeFromTail() {
    if (!this.head) {
      return;
    } else if (!this.head.next) {
      return this.removeFromHead();
    }

    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }

    let rmv = curr.next;
    curr.next = null;

    this.length--;
    return rmv;

    // Write your hypothesis on the time complexity of this method here
  }

  peekAtHead() {
    if (!this.head) {
      return;
    }
    return this.head.value;
    // Write your hypothesis on the time complexity of this method here
  }

  print() {
    if (!this.head) {
      return;
    }
    let current = this.head;

    while (current) {
      console.log(`${current.value}`);
      current = current.next;
    }

    console.log("NULL");
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
