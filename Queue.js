const Stack = require("./Stack");

class Queue {
  constructor(items = []) {
    this.items = items;
  }

  // Time: O(1) constant
  // Space: O(1)
  enqueue(item) {
    this.items.push(item);
  }

  // if empty will return undefined
  // Time: O(n) linear, due to having to shift all the remaining items to the left after removing first elem
  // Space: O(1)
  dequeue() {
    return this.items.shift();
  }

  // returns undefined if empty
  // Time: O(1)
  // Space: O(1)
  front() {
    return this.items[0];
  }

  // Time: O(1)
  // Space: O(1)
  isEmpty() {
    return this.items.length === 0;
  }

  // Time: O(1)
  // Space: O(1)
  size() {
    return this.items.length;
  }

  // Time: O(n) linear
  // Space: O(n)
  print() {
    const str = this.items.join(" ");
    console.log(str);
    return str;
  }

  sumOfHalvesEqual(){
    let len = this.size();
    let sum1 = 0;
    let sum2 = 0;

    // loop through first half and sum... dequue and sum enque
    // continue for second hald dequeue and sum enqueue
    // compare
    let i = 0; 
    while (i<len){
      if (i<len/2){
        let temp = this.front();
        this.dequeue();
        this.enqueue(temp);
        sum1 = sum1 + temp;
        i++;
      }
      else{
        let temp = this.front();
        this.dequeue();
        this.enqueue(temp);
        sum2 = sum2 + temp;
        i++;
      }
    }
    if (sum1 == sum2){
      return true;
    }
    else{
      return false;
    }
  }

}
module.exports = Queue;


