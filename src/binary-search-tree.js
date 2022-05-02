const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  tree = null;

  root() {
    return this.tree;
  }

  add(value) {
    if (this.tree === null) this.tree = {
      data: null,
      up: null,
      left: null,
      right: null
    }
    let node = this.tree;
    while(true) {
      if (node.data === null) {
        node.data = value; 
        break;
      }
      else if (value < node.data) {
        if (node.left === null) {
          node.left = {
            data: value,
            up: node,
            left: null,
            right: null
          }
          break;
        }
        else {
          node = node.left;
          continue;
        }
      }
      else if (value > node.data) {
        if (node.right === null) {
          node.right = {
            data: value,
            up: node,
            left: null,
            right: null
          }
          break;
        }
        else {
          node = node.right;
          continue;
        }
      }
      else break;
    }
  }

  has(value) {
    if (this.tree === null) return false;
    let node = this.tree;
    while (true) {
      if (value === node.data) return true;
      else if (value < node.data) {
        if (node.left === null) return false;
        else {
          node = node.left;
          continue;
        }
      }
      else if (value > node.data) {
        if (node.right === null) return false;
        else {
          node = node.right;
          continue;
        }
      }
    }
  }

  find(value) {
    if (this.tree === null) return null;
    let node = this.tree;
    while (true) {
      if (value === node.data) return node;
      else if (value < node.data) {
        if (node.left === null) return null;
        else {
          node = node.left;
          continue;
        }
      }
      else if (value > node.data) {
        if (node.right === null) return null;
        else {
          node = node.right;
          continue;
        }
      }
    }
  }

  remove(value) {
    function findMinNode(start) {
      let node = start;
      while(true) {
        if (node.left !== null) {
          node = node.left; 
          continue;
        }
        else return node;
      }
    }

    let node = this.find(value);
    if (node === null) return;
    let up = node.up;
    if (node.left === null && node.right === null) {
      if (up !== null) {
        if (node.data < up.data) up.left = null;
        else up.right = null;
      }
      else {
        this.tree = null;
      }
    }
    else if (node.left === null && node.right !== null) {
      if (up !== null) {
        if (node.data < up.data) {
          up.left = node.right;
          node.right.up = node.up;
        }
        else {
          up.right = node.right;
          node.right.up = node.up;
        }
      }
      else {
        this.tree = node.right;
      }
    } 
    else if (node.left !== null && node.right === null) {
      if (up !== null) {
        if (node.data < up.data) {
          up.left = node.left;
          node.left.up = node.up;
        }
        else {
          up.right = node.left;
          node.left.up = node.up;
        }
      }
      else {
        this.tree = node.left;
      }
    }
    else {
      let left = node.left;
      let right = node.right;
      let min = findMinNode(right);
      min.left = left;
      left.up = min;
      if (up !== null) {
        if (node.data < up.data) {
          up.left = node.right;
          node.right.up = node.up;
        }
        else {
          up.right = node.right;
          node.right.up = node.up;
        }
      }
      else {
        this.tree = node.right;
      }
    }
  }

  min() {
    if (this.tree === null) return null;
    let node = this.tree;
    while(true) {
      if (node.left !== null) {
        node = node.left; 
        continue;
      }
      else return node.data;
    }
  }

  max() {
    if (this.tree === null) return null;
    let node = this.tree;
    while(true) {
      if (node.right !== null) {
        node = node.right; 
        continue;
      }
      else return node.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};