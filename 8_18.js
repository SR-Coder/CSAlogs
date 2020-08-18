class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Time: O(1) constant
    // Space: O(1)
    isEmpty() {
        return this.root === null;
    }

    // Time: O(h) linear, h = height of left sub tree starting from current node
    // Space: O(1)
    min(current = this.root) {
        if (current === null) {
            return null;
        }

        while (current.left) {
            current = current.left;
        }
        return current.data;
    }

    // Time: O(h) linear, h = height of left sub tree starting from current node
    // Space: O(1)
    minRecursive(current = this.root) {
        if (current === null) {
            return null;
        }

        if (current.left === null) {
            return current.data;
        }
        return this.minRecursive(current.left);
    }

    // Time: O(h) linear, h = height of right sub tree starting from current node
    // Space: O(1)
    max(current = this.root) {
        if (current === null) {
            return null;
        }

        while (current.right) {
            current = current.right;
        }
        return current.data;
    }

    // Time: O(h) linear, h = height of right sub tree starting from current node
    // Space: O(1)
    maxRecursive(current = this.root) {
        if (current === null) {
            return null;
        }

        if (current.right === null) {
            return current.data;
        }
        return this.minRecursive(current.right);
    }

    contains(value){
        if(this.root == null){
            return false;
        }
        else if(this.root.data > value){
            let current = this.root;
            while(current.left != null){
                if (current.data == value){
                    return true;
                }
                else{
                    if (current.left.data == value){
                        return true;
                    }
                    else {
                        current = current.left;
                    }
                }
            }
            return false;
        }
        else{
            let current = this.root;
            while(current.right !=null){
                if (current.data == value){
                    return true;
                }
                else{
                    if (current.right.data == value){
                        return true;
                    }
                    else{
                        current = current.right;
                    }
                }
            }
            return false;
        }
    }

    // or you could just do max - min from the above functions
    range(){
        if (this.root == null){
            return false;
        }
        if (this.root.left == null && this.root.right == null){
            return 0;
        }
        else{
            let currentL = this.root;
            let currentR = this.root;
            while (currentL.left != null){
                currentL = currentL.left;
            }
            while (currentR.right !=null){
                currentR = currentR.right;
            }
            let rng = currentR.data - currentL.data;
            return rng;
        }
    }
}



const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new Node(10);

/* twoLevelTree 
          root
          10
        /   \
      5     15
  */
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new Node(10);
twoLevelTree.root.left = new Node(5);
twoLevelTree.root.right = new Node(15);

console.log(twoLevelTree.range());

/* fullTree
                      root
                  <-- 25 -->
                /            \
              15             50
            /    \         /    \
          10     22      35     70
        /   \   /  \    /  \   /  \
      4    12  18  24  31  44 66  90
  */
// const fullTree = new BinarySearchTree();
// fullTree
//   .insert(25)
//   .insert(15)
//   .insert(10)
//   .insert(22)
//   .insert(4)
//   .insert(12)
//   .insert(18)
//   .insert(24)
//   .insert(50)
//   .insert(35)
//   .insert(70)
//   .insert(31)
//   .insert(44)
//   .insert(66)
//   .insert(90);
