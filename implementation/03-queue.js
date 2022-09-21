const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   enqueue(val) {
      // Add node to end of queue (linked list)

      // Your code here
      const newNode = new SinglyLinkedNode(val);
      this.length++;
      if (!this.tail) {
         this.head = newNode;
      } else {
         this.tail.next = newNode;
      }
      this.tail = newNode;
      return this.length;
      // Write your hypothesis on the time complexity of this method here
   }

   dequeue() {
      // Remove node from front of queue (linked list)

      // Your code here
      if (!this.head) {
         return null;
      }

      let rmv = this.head;

      this.head = this.head.next;
      this.length--;
      if (this.length === 0) {
         this.tail = null;
      }

      return rmv.value;
      // Write your hypothesis on the time complexity of this method here
   }
}

module.exports = {
   Queue,
   SinglyLinkedNode,
};
