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

### singly linked list class

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let first = new Node('hi');
first.next = new Node('there');
first.next.next = new Node('there');
```
