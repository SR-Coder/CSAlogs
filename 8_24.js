class MinHeap {
    constructor() {
        // 0th index not used, so null is a placeholder. Not using 0th index helps make some calculations simpler
        // are array is now sort of 1-based instead of 0-based since the first real value will be index 1;
        this.heap = [null];
    }

    insert(val) {
        if (this.heap.length <= 1) {
            console.log("heap length " + this.heap.length);
            this.heap.push(val);
            return this;
        }
        this.heap.push(val);
        console.log("heap length " + this.heap.length);
        //[5,10,15,20, val(6)]
        //[5,10,15,val(6), 20]
        // [, val]

        this.shiftUp();
        return this;
    }

    shiftUp() {
        let val = this.heap.length - 1;
        for (var i = this.heap.length - 1; i > 0; i--) {
            console.log(this);
            if (val <= this.heap[i - 1]) console.log(this);
            temp = this.heap[i - 1];
            console.log(this);
            val = this.heap[i - 1];
            console.log(this);
            this.heap[i] = temp;
            console.log(this);
        }
        return this;
        // see shiftUp in Heaps.md to implement
    }
}

const test1 = new MinHeap().insert(5);
console.log(test1);

// - parent is located at `Math.floor(i / 2);`
// - left child is located at `i * 2`
// - right child is located at `i * 2 + 1`
