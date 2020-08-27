/* 
  4. Thur
    - A Doubly Linked List is a singly linked list with the added functionality of being able to traverse in both directions.
    - Since you can traverse forwards or backwards, that means you should be able to start at the head or tail (end). After creating the necessary classes, then build the following methods:
      - insertAtFront
        - given some new data, add it as the new head
      - insertAtBack
        - given some new data, add it to the back of the DList
      - removeMiddleNode
*/
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    print() {
        let runner = this.head;
        let vals = "";

        while (runner) {
            vals += `${runner.data}${runner.next ? ", " : ""}`;
            runner = runner.next;
        }
        console.log(vals);
        return vals;
    }

    seedFromArr(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.insertAtBack(arr[i]);
        }
        return this;
    }

    isEmpty() {
        if (this.head == null) {
            return true;
        }
        return false;
    }
    insertAtFront(val) {
        const newHead = new Node(val);
        if (this.isEmpty()) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head.prev = newHead;
            this.head = newHead;
        }
        return this;
    }
    insertAtBack(val) {
        const newTail = new Node(val);
        if (this.isEmpty()) {
            this.head = newTail;
            this.tail = newTail;
        } else {
            newTail.prev = this.tail;
            this.tail.next = newTail;
            this.tail = newTail;
        }
        return this;
    }
}

const emptyList = new DoublyLinkedList();
const singleNodeList = new DoublyLinkedList().insertAtBack(1);
const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
const firstThreeList = new DoublyLinkedList().seedFromArr([1, 2, 3]);

const secondThreeList = new DoublyLinkedList().seedFromArr([4, 5, 6]);
const unorderedList = new DoublyLinkedList().seedFromArr([-5, -10,
    4, -3,
    6,
    1, -7, -2,
]);

const sortedDupeList = new DoublyLinkedList().seedFromArr([
    1,
    1,
    1,
    2,
    3,
    3,
    4,
    5,
    5,
]);
sortedDupeList.print();
sortedDupeList.insertAtFront(-4);
sortedDupeList.insertAtBack(-100);
sortedDupeList.print();