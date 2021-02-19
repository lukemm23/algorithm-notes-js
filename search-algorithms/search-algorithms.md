# searching algorithms

- describe what a searching algorithm is
- implement linear search on arrays
- implement binary search on sorted arrays
- implement a naive string searching algorithm
- implement the KMP string searching algorithm

### linear search

- given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want.
- there are many different search methods on arrays in javascript: indexOf returns index, includes returns boolean, find, findIndex etc.

### linear search pseudocode

1. this function accepts an array and a value
2. loop through the array and check if the current array element is equal to the value
3. if it is, return the index at which the element is found.
4. if the value is never found, return -1.

### example 1 time complexity: O(n)

```js
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
}
```

### binary search

- binary serch is a much faster form of search
- rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- binary search only works on sorted arrays.

### binary search pseudocode

1. this function accepts a sorted array and a value
2. set min and max index, min starting at 0 index, and max starting a last index, arr.length-1
3. run while min is smaller than max loop, set middle value
4. if middle is smaller than val then shorten the while loop by setting min to middle + 1
5. if middle is greater than val then shorten the while loop by setting max to middle -1
6. then if val equal middle then return middle which is the value.
7. if while loop finish and nothing returned then return -1 since value is not there.

### example 2 time complexity: O(logN)

binary solution variation 1

```js
function binarySearch(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
```

binary solution variation 2

```js
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === val ? middle : -1;
}
```

### naive string search

- suppose you want to count the number of times a smaller string apears in a longer string
- a straight forward approach involves checking pairs of characters individually.

### naive string search pseudocode

1. this function accepts the longer string and shorter string to match against
2. loop over the longer string
3. loop over the shorter string
4. if characters dont match, break out of the inner loop
5. if the characters do match, keep going
6. if you complete the inner loop and find a match, increment the count of matches.

### example 3 naive string search: time complexity O(N^2)

```js
function searchNaive(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}
```
