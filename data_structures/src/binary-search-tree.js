const not = (fn) => (...args) => !fn(args);

const isEmpty = (arr) => arr.length === 0;

const isNotEmpty = (arr) => arr.length !== 0;

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  depthFirstForEachIterative(cb) {
    const stack = [this];

    while (isNotEmpty(stack)) {
      const currNode = stack.pop();
      cb(currNode.value);

      currNode.right && stack.push(currNode.right);
      currNode.left && stack.push(currNode.left);
    }
  }

  depthFirstForEachRecursive(cb, currNode = this) {
    if (currNode === null) {
      return 'Must use a non-empty tree.';
    }

    cb(currNode.value);
    currNode.left && this.depthFirstForEachRecursive(cb, currNode.left);
    currNode.right && this.depthFirstForEachRecursive(cb, currNode.right);
  }

  breadthFirstForEachIterative(cb) {
    const queue = [this];

    while (isNotEmpty(queue)) {
      const currNode = queue.shift();
      cb(currNode.value);

      currNode.left && queue.push(currNode.left);
      currNode.right && queue.push(currNode.right);
    }
  }

  breadthFirstForEachRecursive(cb, queue = [this]) {
    if (isEmpty(queue)) return;

    const currNode = queue.shift();
    cb(currNode.value);

    currNode.left && queue.push(currNode.left);
    currNode.right && queue.push(currNode.right);

    this.breadthFirstForEachRecursive(cb, queue);
  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) return null;

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }
}

module.exports = BinarySearchTree;
