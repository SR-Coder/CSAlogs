/*
Week 4
3. Wed
  - reverse
    - reverse an sList in place (do not create a new sList)
  - hasLoop
    - return whether or not the linked list connects back to itself. If it connects to itself, what does that mean will happen when you loop through it?
  - extra: removeNegatives (in place, no new list)
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // all the methods (functionality) of our linked list go here:

    // Time: O(n * m), n = arr.length, m = this linked list's length
    // Space: O(1) constant
    seedFromArr(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.insertAtBack(arr[i]);
        }
        return this;
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

    isEmpty() {
        return this.head === null;
    }

    insertAtBack(data) {
        const newTail = new Node(data);

        if (this.isEmpty()) {
            // list that has only a head means, the head is both the head and the tail
            this.head = newTail;
            return this;
        }

        let runner = this.head;

        while (runner.next !== null) {
            runner = runner.next;
        }

        runner.next = newTail;
        return this;
    }

    // Time: O(1) constant
    // Space: O(1)
    insertAtFront(data) {
        const newHead = new Node(data);
        newHead.next = this.head;
        this.head = newHead;
        return this;
    }

    // Time: O(1) constant
    // Space: O(1)
    removeHead() {
        if (this.isEmpty()) {
            return null;
        }
        const oldHead = this.head;
        this.head = this.head.next;
        return oldHead.data;
    }

    // Time: O(n) linear, n = length of list
    // Space: O(1) constant
    average() {
        let runner = this.head;
        let sum = 0;
        let cnt = 0;

        while (runner) {
            cnt++;
            sum += runner.data;
            runner = runner.next;
        }
        return sum / cnt;
    }

    // Time: O(n) linear, n = length of list
    // Space: O(1) constant
    removeBack() {
        let removedData = null;

        if (!this.isEmpty()) {
            if (this.head.next === null) {
                // head only node
                removedData = this.head.data;
                this.head = null; // remove it from list
            } else {
                let runner = this.head;
                // right of && will only be checked if left is true
                while (runner.next.next) {
                    runner = runner.next;
                }

                // after while loop finishes, runner is now at 2nd to last node
                removedData = runner.next.data;
                runner.next = null; // remove it from list
            }
        }
        return removedData;
    }

    // Time: O(n) linear, n = length of list
    // Space: O(1)
    contains(val) {
        let runner = this.head;

        while (runner) {
            if (runner.data === val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // Time: O(n - 1) n = list length -> O(n) linear
    // Space: O(1) constant
    secondToLast() {
        if (!this.head || !this.head.next) {
            return null;
        }

        // there are at least 2 nodes

        let runner = this.head;

        while (runner.next.next) {
            runner = runner.next;
        }
        return runner.data;
    }

    // Time: O(n) linear, n = list length. Val could be last node
    // Space: O(1) constant
    removeVal(val) {
        if (this.isEmpty()) {
            return null;
        }

        if (this.head.data === val) {
            return this.removeHead();
        }

        let runner = this.head.next;

        while (runner.next && runner.next.data !== val) {
            runner = runner.next;
        }

        if (runner.next && runner.next.data === val) {
            const removedData = runner.next.data;
            runner.next = runner.next.next;
            return removedData;
        }
        return null;
    }

    // Time: O(n) linear, n = length of list
    // Space: O(1)
    containsRecursive(val, runner = this.head) {
        if (runner === null) {
            return false;
        }

        if (runner.data === val) {
            return true;
        }
        return this.containsRecursive(val, runner.next);
    }

    // Time: O(n) linear, n = list length. Max could be at end.
    // Space: O(1) constant
    recursiveMax(runner = this.head, maxNode = this.head) {
        if (this.head === null) {
            return null;
        }

        if (runner === null) {
            return maxNode.data;
        }

        if (runner.data > maxNode.data) {
            maxNode = runner;
        }

        return this.recursiveMax(runner.next, maxNode);
    }

    // Time: O(n) linear, n = list length, could end up prepending to last node
    // Space: O(1) constant
    prepend(newVal, targetVal) {
        const newNode = new Node(newVal);

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let prev = this.head;
        let current = this.head.next;

        while (current.data !== targetVal) {
            prev = current;
            current = current.next;
        }

        prev.next = newNode;
        newNode.next = current;
        return this;
    }

    // Time: O(2n) n = list length -> O(n) linear, 2nd loop could go to end if min was at end
    // Space: O(1) constant
    /* 
Alternatively, could swap the data in min node and head,
but it's better to swap the nodes themselves in case anyone has variables pointing to these nodes
already, we don't want those to be negatively affected via an unwanted side effect 
*/
    moveMinToFront() {
        if (this.isEmpty()) {
            return this;
        }

        let minNode = this.head;
        let runner = this.head;
        let prev = this.head;

        while (runner) {
            if (runner.data < minNode.data) {
                minNode = runner;
            }

            runner = runner.next;
        }
        // now that we know the min, if it is already the head, nothing needs to be done
        if (minNode === this.head) {
            return this;
        }

        runner = this.head;

        while (runner !== minNode) {
            prev = runner;
            runner = runner.next;
        }

        prev.next = minNode.next; // remove the minNode
        minNode.next = this.head;
        this.head = minNode;
        return this;
    }

    // Time: O(n) linear, n = list length
    // Space: O(n)
    // This avoids the extra loop in the above sln
    moveMinFront() {
        if (this.isEmpty()) {
            return this;
        }

        let minNode = this.head;
        let runner = this.head;
        let prev = this.head;

        while (runner) {
            if (runner.data < minNode.data) {
                minNode = runner;
            }

            // make sure the prev stays the prev of minNode
            // if minNode is last node, we don't want prev to become the runner
            if (prev.next !== minNode && runner.next !== null) {
                prev = runner;
            }
            runner = runner.next;
        }

        if (minNode === this.head) {
            return this;
        }

        prev.next = minNode.next;
        minNode.next = this.head;
        this.head = minNode;
        return this;
    }
    reverse(){
        let prev;
        let current = this.head;
        let next;
        while(current!=null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        return this;
    }
}

const emptyList = new SinglyLinkedList();
const singleNodeList = new SinglyLinkedList().insertAtBack(1);
const biNodeList = new SinglyLinkedList().insertAtBack(1).insertAtBack(2);
const firstThreeList = new SinglyLinkedList().seedFromArr([1, 2, 3]);

const secondThreeList = new SinglyLinkedList().seedFromArr([4, 5, 6]);
const unorderedList = new SinglyLinkedList().seedFromArr([
    -5,
    -10,
    4,
    -3,
    6,
    1,
    -7,
    -2,
]);

const sortedDupeList = new SinglyLinkedList().seedFromArr([
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

// firstThreeList.print();
firstThreeList.print();
firstThreeList.reverse();
debugger;
firstThreeList.print();
// console.log(emptyList.recursiveMax(), "should be null");
// console.log(singleNodeList.recursiveMax(), "should be 1");
// console.log(biNodeList.recursiveMax(), "should be 2");
// console.log(unorderedList.recursiveMax(), "should be 6");
