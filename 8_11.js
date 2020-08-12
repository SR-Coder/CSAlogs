// const singlyLinkedList = require("./8_7");

class Queue {
    constructor(items = []) {
            this.items = items;
        }
        // add methods here, outside constructor
    enqueue(data) {
        this.items.push(data);
        return this;
    }

    dequeue() {
        if (this.isEmpty()) {
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
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    compareStack(myOtherQ) {
        let sl1 = this.items.length;
        let sl2 = myOtherQ.items.length;
        console.log(sl1, sl2);
        if (this.items.length != myOtherQ.items.length) {
            return false;
        }
        else{

            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i] != myOtherQ.items[i]) {
                    return false;
                }
            }
            return true;    
        }
        }
    }
    



// class SllStack {
//     constructor(items = new SinglyLinkedList()) {
//         this.items = items;
//     }

//     enqueue(myItem) {
//         this.items.addToBack(myItem);
//         return this.items.length;
//     }
//     dequeue() {
//         this.items.removeHead();
//         return this.items;
//     }
//     size() {
//         this.items.length;
//     }
//     front() {
//         return this.items.head;
//     }
// }

module.exports = Queue;