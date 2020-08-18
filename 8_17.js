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

    isEmpty() {
        return this.root == null;
    }

    min() {
        if (this.isEmpty()){
            return null;
        }
        let runner = this.root;
        while(this.left !=null){
            runner = runner.left;
        }
        return runner.data;
    }

    minRecursive(runner) {
        if (runner.left == null){
            return runner.data;
        }
        return this.minRecursive(runner.left);
    }

    max() {
        if (this.isEmpty()){
            return null;
        }
        let runner = this.root;
        while(this.right !=null){
                runner = runner.right;
            }
            return runner.data;
        }
    

    maxRecursive() {
        if (runner.right == null){
            return runner.data;
        }
        return maxRecursive(runner.right);
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

console.log(emptyTree.isEmpty());
console.log(oneNodeTree.isEmpty());
console.log(twoLevelTree.isEmpty());

console.log(emptyTree.min());
console.log(oneNodeTree.min());
console.log(twoLevelTree.min());

console.log(emptyTree.max());
console.log(oneNodeTree.max());
console.log(twoLevelTree.max());
/*
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
