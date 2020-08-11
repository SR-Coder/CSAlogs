const singlyLinkedList = require("./8_7");

class Stack {
    constructor(items = []) {
            this.items = items;
        }
        // add methods here, outside constructor
    enqueue(data) {
        this.items.push(data);
        return this.items.length();
    }

    dequeue() {
        if (this.isEmpty) {
            return null;
        }
        removed = this.items[0];
        for (i = 1; i < this.items.length; i++) {
            this.items[i - 1] = this.items[i];
        }
        this.items.pop();
        return removed;
    }

    isEmpty() {
        if (this.items.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    size() {
        return this.items.length;
    }

    front() {
        if (this.isEmpty) {
            return null;
        }
        return this.items[0];
    }

}

class SllStack {
    constructor(items = new SinglyLinkedList()) {
        this.items = items;
    }

    enqueue(myItem) {
        this.items.addToBack(myItem);
        return this.items.length;
    }
    dequeue() {
        this.items.removeHead();
        return this.items;
    }
    size() {
        this.items.length;
    }
    front() {
        return this.items.head;
    }
}