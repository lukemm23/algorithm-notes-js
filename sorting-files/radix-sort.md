# radix sort

- radix sort is one of the fastest sorts. it doesnt rely on comparisons
- radix sort is a special sorting algorithm that works on lists of numbers
- it exploits the fact that information about the size of a number is encoded in the number of digits. more digits is always bigger

### helper methods

- in order to implement radix sort, it's helpful to build a few helper functions first
- getDigit(num, place) - returns the digit in num at the given place value
- digitCount(num) - returns the number of digits in num, and figure out the largest digit number we have inside the data
- mostDigits(nums) - given an array of numbers, returns the number of digits in the largest numbers in the list

### getDigit method example

```js
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
```

### getDigit notes

- Math.floor(): rounds down our answer
- Math.abs(): gives us a positive number or absolute value for our answer
- Math.pow(10, i): gives us 10 to the power of i
- % 10 : to get the remainder when dividing by 10

### digitCount method example

```js
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
```

### digitCount notes

- Math.log10: gives us log 10 of what number gives us num.
- and since answer is have decimal we need to round down and add 1 to it to get correct answer

### mostDigits method example

```js
function mostDigits(nums) {
  let maxDigit = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(num, i));
  }
  return maxDigits;
}
```

### mostDigits notes

- Math.max(): gives max digit of array of numbers by always reassigning maxDigit whenever digitCount() returns a higher number.

### radix sort pseudocode

- define a function that accepts a list of numbers
- figure out how many digits the largest number has
- loop from k = 0 up to this largest number of digits.
- for each iteration of the loop:
  - create a buckets for each digit(0 to 9)
  - place each number in the corresponding bucket based on its Kth digit
- replace our existing array with values in our buckets, starting with 0 and going up to 9
  -return list at the end.

### radix sort example

```js
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigit = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(num, i));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigits(num[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
```

### big O of radix sort

![radix sort](/images/radix-sort.png)
