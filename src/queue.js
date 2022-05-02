const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  queue = null;

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    let node = {
      value,
      next: null,
    }
    if (this.queue === null) this.queue = node;
    else {
      let lastNode = this.queue;
      while (true) {
        if (lastNode.next !== null) {
          lastNode = lastNode.next;
          continue;
        }
        else {
          lastNode.next = node;
          break;
        }
      }
    }
  }

  dequeue() {
    let node = this.queue;
    this.queue = this.queue.next;
    return node.value;
  }
}

module.exports = {
  Queue
};
