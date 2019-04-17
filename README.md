[Data Structures and Algorithms in JavaScript - Full Course for Beginners]('https://www.youtube.com/watch?v=t2CEgPsws3U&t=912s')

# Data Structures and Algorithms

## Stack

- Last in, first out
- Examples:
  - A stack of books
  - Browser's back button
- Functions:
  - Push()
  - Pop()
  - Peek() for displaying top element of stack
  - Length() or size() for determining how many elements on the stack
- JS array object has all functions to use it as a stack

---

## Set

- Similar to array, but sets have no duplicate items
- Typical use case: check for presence of item
- ES6 has built in set object, but doesn't have all methods common to sets

---

## Queue

- First in first out
- Example:
  - waiting in a line
  - print queue: lots of docs sent simultaneously, printed in order sent

---

## Binary Search Tree

### Tree data structure

- Root node
- Parent node
- Child node | Siblings
- Left subtree
- Right subtree
- Leaf nodes: at end of tree, have no children

### Binary Tree

- Can only have 2 branches for every node
- Are ordered
  - Each subtree is <=parent node
  - Each right subtree is >= parent node
- Due to binary search, operations on average are able to skip half the tree
- Takes time proportional to the logarithm of the number of items in the tree
  - Better than linear time to find items by key in unsorted array
  - Slower than corresponding operations on hash table

### Binary Search Tree Height and Traversal

_Height_

- Height in a tree represents distance from root node to any given leaf node
- Think of heights as layers in a cake
- Different paths may have different heights
- If a tree is balances, levels will differ by at most 1
- Functions
  - findMinHeight()
    - Distance from root node to first leaf node without 2 children
  - findMaxHeight()
    - Distance fron root node to most bottom node
  - isBalanced()
    - Check if minHeight and maxHeight differ by at most 1
- When a tree is balanced, searching through it is more efficient
- There are ways to make tree automatically balance itself when adding removing new items -> greater efficiency

_Traversal_

- Tree treversal methods are used to find values in a tree
- Methods
  - **inOrder**
    - begin at left most node
    - end at right most node
  - **preOrder**
    - explore root nodes before the leaves
  - **postOrder**
    - explore the leaf nodes before the roots
  - **leverOrder**
    - Breadth first search
    - explores all the nodes at a given level of the tree, before continuing on to the next level

## Hash Table

- Used to implement associative arrays or mappings of key value pairs
- Common way to implement map data structure for objects
- Widely use becuase of how efficient they are
  - Average time for each lookup is not tied to the number of elements in the table
  - Average time complexity is O(1) for search, insert, delete

How Hash tables work:

1. Take a key as input
2. Run key through a hash function.

- Hash functions map strings to numbers.
- Number is usually just an index.
- Hash function must be deterministic
  - Always returns the same hash for a given string
  - One string should be mapped to a given number.
  - Multiple strings mapping to the same number is called a collision
  - Can be done so that multiple strings map to a number, then must be iterated when reached

Key => Hash Function => Index => Information stored in the 'bucket'

- In JS, hash tables are implemented in objects

## Linked List

- Elements are stored in a node
- Node contains
  - Element itself
  - Reference to the next node
- Have advantages and disadvantages compared to arrays
  - _Advantages_
    - Efficient insertions and deletions
    - No waste of memory. No larger than necessary due to dynamic size
  - _Disadvantages_
    - Sequential access is slow, because elements are in in contiguous memory locations
    - No random access. Can't say 'give me index 5'

Every linked list has

- Head pointing to 1st node
- Node pointing to the next node
- Last node pointing to null

Functions

- size()
- head()
- add()
- remove()
- isEmpty()
- indexOf()
- elementAt()
- addAt()
- removeAt()

## Trie

Special type of tree used to store associative data structures

- Stores data in steps
- Each step is a node in the trie
- Often used to store words
  - Finite number of letters used to make up a string
- Use cases
  - Validate that a word is in a dictionary
  - Each node represents a letter in a word
- Steps branch off
  - When the order of the letters diverge from the other words in the trie
  - When a word ends

## Heap

Partially ordered binary tree.

- Similar to binary search tree, but order is different
- Heap property indicates a relationship between parent and child nodes
  - Max heap: all parent nodes are > or === child nodes
  - Min heap: all child nodes are > or === child nodes
  - Order between child nodes on same level does not matter
- Binary heaps are complete binary trees
  - All levels of tree are fully filled
  - If last level is partially filled, it's filled from left to right
  - May be implemented as tree structures
  - More often implemented as arrays

Equations when implementing with array

- left child: i \* 2
- right child: i \* 2 + 1
- parent: i / 2

Main functions

- insert()
- remove()

<!-- When to use ? -->
