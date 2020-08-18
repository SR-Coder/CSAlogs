// 5. Fri
//    - PriorityQueue (create enqueue and dequeue methods)
//      - design a new PriorityQueue class where the queue maintains an 
//        ascending order when items are added based on queue item's provided 
//        priority integer value. A priority value of 1 is most important 
//        which means it should be at the front of the queue, the first to be dequeued.
//    - LinkedListPriorityQueue

class priorityQueue{
    constructor(){
        this.items = [];
    }
    
    // {"data":data, "Pri":pri}
    encueue(item){
        this.items.push(item)
    }

}
