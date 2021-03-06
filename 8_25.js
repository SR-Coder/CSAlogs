class MinHeap {
    constructor() {
        // 0th index not used, so null is a placeholder. Not using 0th index helps make some calculations simpler
        // are array is now sort of 1-based instead of 0-based since the first real value will be index 1;
        this.heap = [null];
    }

    insert(val) {
        this.heap.push(val);
        this.shiftUp();
        return this;
    }

    shiftUp() {
        // so we don't have to keep typing this.
        const heap = this.heap;

        let idxOfNodeToShiftUp = heap.length - 1;

        this.printArr(
            `shiftUp start from back to shift ${heap[idxOfNodeToShiftUp]} up:`
        );
        this.printHorizontalTree();

        while (idxOfNodeToShiftUp > 1) {
            const idxOfParent = Math.floor(idxOfNodeToShiftUp / 2);

            // parent is already smaller or equal, no more swapping needed
            if (heap[idxOfParent] <= heap[idxOfNodeToShiftUp]) {
                break;
            }

            // while the parent is NOT smaller or equal, swap it with it's child (array destructure swap syntax)
            // when the while loop is done, the new node is in it's correct place so all parents are smaller or equal to children
            [heap[idxOfNodeToShiftUp], heap[idxOfParent]] = [
                heap[idxOfParent],
                heap[idxOfNodeToShiftUp],
            ];

            this.printArr(
                `shiftUp swapped ${heap[idxOfParent]} & ${heap[idxOfNodeToShiftUp]}:`
            );
            this.printHorizontalTree();

            idxOfNodeToShiftUp = idxOfParent;
        }
        console.log("shiftUp done\n");
    }

    extract() {
        // put heap[1] in temp
        const val = this.heap[1];
        //assign heap[1] to heap.pop
        this.heap[1] = this.heap.pop();
        this.shiftDown();
        return this;
    }
    shiftDown(){
        let idx =1;
        let heap = this.heap
        while(true){
            let child;
            let childIdx;
            if (heap[idx*2] == undefined || heap[idx*2+1] == undefined){
                break;
            }
            if(heap[idx*2]<= heap[idx*2+1]){
                child = heap[idx*2];
                childIdx = idx*2;
            } else{
                child = heap[idx*2+1];
                childidx = idx*2+1;
            }
            if(heap[idx] < child){
                break;
            } else {
                let swap = heap[idx];
                heap[idx] = child;
                heap[childIdx] = swap;
                idx = childIdx;
            }
        }
        return this;
        // compare value of childere to get lesser value
        // compare this.heap[idx] with lesser child
        // if its larger than the lesser child, swap
    }

    // prints tree with root on left and index in parens in reverse inorder traversal
    // https://www.geeksforgeeks.org/print-binary-tree-2-dimensions/
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
        if (parentIdx > this.heap.length - 1) {
            return;
        }

        spaceCnt += spaceIncr;
        this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
                `${this.heap[parentIdx]} (${parentIdx})`
        );

        this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }

    printArr(...appendedMsgs) {
        const arrStr = `\n[${["null", ...this.heap.slice(1)].join(", ")}]`;
        const msgLen = arrStr.length + appendedMsgs.toString().length;
        console.log("-".repeat(msgLen), arrStr, ...appendedMsgs);
    }
}

const minHeap = new MinHeap();
minHeap
    .insert(5)
    .insert(4)
    .insert(7)
    .insert(3)
    .insert(6)
    .insert(2)
    .insert(1)
    .insert(0);
minHeap.printArr();
minHeap.extract();
minHeap.printArr();