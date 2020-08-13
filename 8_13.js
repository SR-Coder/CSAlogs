const Queue = require("./Queue");
const Stack = require("./Stack");

const que1 = new Queue();


class QueueUsingTwoStacks {
    constructor(items) {
        this.mainStack = new Stack();
        this.tempStack = new Stack();
    }
    dequeue() {
        this.alternateStacks(this.mainStack, this.tempStack);
        let mydata = this.tempStack.pop()
        this.alternateStacks(this.tempStack, this.mainStack)
        return mydata;

    }
    enqueue(data) {
        this.mainStack.push(data);
        return this.mainStack.length;
    }


    alternateStacks(start, destination)
    {
        while (start.size()){
            destination.push(star.pop());
        }
    }
  }



que1.enqueue(5);
que1.enqueue(2);
que1.enqueue(2);
que1.enqueue(5);
que1.enqueue(2);
que1.enqueue(5);
que1.enqueue(2);
que1.enqueue(5);
que1.print();
console.log(que1.sumOfHalvesEqual());
que1.print();