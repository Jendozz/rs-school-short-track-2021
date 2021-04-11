const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.startPoint = null;
    this.endPoint = null;
    this.countElements = 0;
  }

  get size() {
    // throw new Error('Not implemented');
    return this.countElements;
  }

  enqueue(element) {
    // throw new Error('Not implemented');
    const node = new ListNode(element);
    if (this.countElements === 0) {
      this.startPoint = node;
      this.endPoint = node;
    } else {
      this.endPoint.next = node;
      this.endPoint = node;
    }
    this.countElements++;
  }

  dequeue() {
    // throw new Error('Not implemented');
    const removeNode = this.startPoint;
    if (this.countElements !== 0) {
      this.startPoint = this.startPoint.next;
    }
    this.countElements--;
    return removeNode.value;
  }
}

module.exports = Queue;
