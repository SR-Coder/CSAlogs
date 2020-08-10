const singlyLinkedList = require("./8_7");

class Stack {
    constructor(items = []) {
            this.items = items;
        }
        // add methods here, outside constructor
    push(myItem) {
        this.items.push(myItem);
        return this.items;
        // 'this' keyword will refer to the class instance
        // that newMethod was called on
    }
    pop() {
        if (this.items === null) {
            return null;
        }

        this.items.pop();
        return this.items;
    }
    isEmpty() {
        return this.items === null;
    }
    length(){
        return this.items.length();
    }
    peak(){
        return this.items[this.items.length()-1];
    }
}

class SllStack {
    constructor(items = new SinglyLinkedList()) {
        this.items = items;
    }

    push(myItem) {
        this.items.insertAtFront(myItem);
        return this.items;
    }
    pop() {
        this.items.removeHead();
        return this.items;
    }
    length(){
    
        
    }
}

let stack = new Stack();

let sslStack = new SllStack();

sslStack.push(1);
sslStack.push(2);
sslStack.push(3);
console.log(sslStack);

sslStack.pop();
sslStack.pop();
console.log(sslStack);