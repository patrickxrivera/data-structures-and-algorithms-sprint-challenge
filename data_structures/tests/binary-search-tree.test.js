const BinarySearchTree = require('../src/binary-search-tree');

let bst;

describe('`depthFirstForEach` and `breadthFirstForEach`', () => {
  beforeEach(() => {
    bst = new BinarySearchTree(5);
  });

  test('`depthFirstForEachIterative` executes a callback on every value in a tree in depth-first order', () => {
    const array = [];
    const cb = (x) => array.push(x);

    bst.insert(2);
    bst.insert(3);
    bst.insert(7);
    bst.insert(9);
    bst.depthFirstForEachIterative(cb);

    expect(array).toEqual([5, 2, 3, 7, 9]);
  });

  test('`depthFirstForEachRecursive` executes a callback on every value in a tree in depth-first order', () => {
    const array = [];
    const cb = (x) => array.push(x);

    bst.insert(2);
    bst.insert(3);
    bst.insert(7);
    bst.insert(9);
    bst.depthFirstForEachRecursive(cb);

    expect(array).toEqual([5, 2, 3, 7, 9]);
  });

  test('`breadthFirstForEachRecursive` executes a callback on every value in a tree in breadth-first order', () => {
    const array = [];
    const cb = (x) => array.push(x);

    bst.insert(3);
    bst.insert(4);
    bst.insert(10);
    bst.insert(9);
    bst.insert(11);
    bst.breadthFirstForEachRecursive(cb);

    expect(array).toEqual([5, 3, 10, 4, 9, 11]);
  });

  test('`breadthFirstForEachIterative` executes a callback on every value in a tree in breadth-first order', () => {
    const array = [];
    const cb = (x) => array.push(x);

    bst.insert(3);
    bst.insert(4);
    bst.insert(10);
    bst.insert(9);
    bst.insert(11);
    bst.breadthFirstForEachIterative(cb);

    expect(array).toEqual([5, 3, 10, 4, 9, 11]);
  });

  test('`depthFirstForEachIterative` handles an empty tree with style and grace', () => {
    const array = [];
    const cb = (x) => array.push(x);

    bst.insert(2);
    bst.insert(3);
    bst.insert(7);
    bst.insert(9);

    expect(bst.depthFirstForEachRecursive(cb, null)).toBe('Must use a non-empty tree.');
    expect(array).toEqual([]);
  });
});
