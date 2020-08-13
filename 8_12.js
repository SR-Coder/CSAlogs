// 3. Wed
//    - compareQueues
//      - write a method on the Queue class that, given another queue, will return whether they are equal (same items in same order)
//      - Use ONLY the provided queue methods, do not manually index the queue items, no extra array or objects
//      - restore the queues to their original state
//    - queueIsPalindrome
//      - write a method on the Queue class that returns whether or not the queue is a palindrome
//      - use only 1 stack as additional storage (no additional arrays / objects)
//      - do not manually index the queue, use the provided queue methods and stack methods, restore the queue to original state when done
//    - Extra: MinStack
//      - Design a stack that supports push, pop, top, and min methods where the min method retrieves the minimum int in the stack
//      - Bonus: retrieve min element in constant time (no looping).

// const queue = require("./Queue");
const Queue = require("./8_11");



const MyQue1 = new Queue()
const MyQue2 = new Queue()
MyQue1.enqueue(1).enqueue(2).enqueue(3)
MyQue2.enqueue(1).enqueue(2).enqueue(3);

console.log(MyQue2.size())
console.log(MyQue1.size())




console.log(MyQue1.compareStack(MyQue2))

