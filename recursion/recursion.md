# recursion

- define what recursion is and how it can be useful
- understand the two essential components of a recursive function
- visualize the call stack to better debug and understand recursive functions
- use helper method recursion and pure recursion to solve more difficult problems

### define recursion

a process (a function in our case) that calls inself, JSON.parse & JSON.stringify are recursive functions

### the calls tack

- in almost all program languages, there is a built in data structure that manages what happens when functions are invoked, the call stack.
- anytime a function is invoked it is placed (pushed) on the top of the call stack.
- when javascript sees the return keyword or when the function ends, the compiler will remove (pop).

### base case

- the condition when the recursion ends. each recursion function must include a base case or else it becomes infinitely running.

### two essential parts of a recursive function

- a base case to end the function
- a different input to evaluate each time running the function

### example 1 recursion loop

```js
function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}
```

### example 2 for loop

```js
function countDown(num) {
  for (let i = 0; i > 0; i--) {
    console.log(i);
  }

  console.log('All done!');
}
```

### example 3

```js
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
```

### example 4 factorial iteratively

```js
function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}
```

### example 4 factorial recursively

```js
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
```

### common pitfalls

- base case is wrong and never gets satisfied, it never gets invoked or never returned.
- the recursive call not moving towards or skipping base case

error message - maximum call stach size exceeded, stack overflow.

### helper method recursion

```js
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}
```

### pure method recursion

```js
function collectOddValues(arr) {
  let NewArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
```

1. set new array variable.
2. if input array length is zero end recursion with base case, return newArr
3. if first position value of arr divided by 2 is not 0 mean its an odd value, then push value to newArr
4. call concat on newArr and run recusion inside concat, slicing the first position value.
5. the concat for collectOddValues([1,2,3,4,5]) will look like [1], [], [3], [], [5] = [1,3,5]

### pure recursion tips

- for arrays, use methods like slice, the spread operator, and concat that makes copies of arrays so you do not mutate them.
- strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings.
- to make copies of objects use Object.assign, or the spread operator.
