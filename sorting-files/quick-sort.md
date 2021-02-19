# quick sort

- like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
- works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array.

### pivot helper

- in order to implement quick sort, its useful to first implement a function responsible for arranging elements in an array on either side of a pivot.
- given an array, this helper function should designate an element as the pivot
- it should then rearrange elements in the aray so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot.
- the order of elements on either side of the pivot doesnt matter.
- the helper should do this in place, that is, it should not create a new array
- when complete, the helper should return the index of the pivot.

### picking a pivot

- the runtime of quick sort depends in part on how one selects the pivot.
- ideally, the pivot should be chosen so that its roughly the median value in the data set your sorting.
- for simplicity, we'll always choose the pivot to be the first element.

### pivot logic pseudocode

- it will help to accept three arguments, array, start index, end index. (these can default to 0 and he array length minus 1, respectively)
- grab the pivot from the start of the array
- store the current pivot index in a variable (this will keep track of where the pivot should end up)
- loop thru the array from the start until the end
  - if the pivot is greater than the current element, increment to pivot index variable and then swap the current element with the element at the pivot index.
- swap the starting element (ie. the pivot) with the pivot index
- return the pivot index.

### pivot logic example

```js
function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}
```

### quick sort pseudocode

- call the pivot helper on the array
- when the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index. and the subarray to the right of that index.

### quick sort example

```js
function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
```

### big O of quick sort

1. at best case

- O(n log n)
- O(n) - for the comparisons of number of arrays
- O(log n) - for spliting arrays

2. at worst case - when data is nearly sorted

- O(n^2) if pivot was chosen badly and picked the largest or smallest value of the data everytime.

![quick sort](/images/quick-sort.png)
