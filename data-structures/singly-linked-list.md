# singly linked list

- define what a singly linked list is
- compare and contrast linked lists with arrays
- implement insertion, removal and raversal methods on singly linked lists.

### what is a linked list

- a data structure that contains a head, tail, and length property.
- linked lists consist of nodes, and each node has a value and a pointer to another node or null.

![singly linked list](/images/singly-linked-list.png)

### comparisons with arrays

1. lists

- do not have indexes
- connected via nodes with a next pointer
- random access is not allowed

2. arrays

- indexed in order
- insertion and deletion can be expensive
- can quickly be accessed at a specific index

### singly linked list class example

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
```

### push method pseudocode

- this function should acept a value
- create a new node using the value passed to the function
- if there is no head property on the list, set the head and tail to be the newly created node
- otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
- increment the length by 1

### singly linked list class push method example

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}
```
