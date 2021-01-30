# BIG O NOTATION

# 1. intro

### Overview

1. in explaining which algorithm is the best solution, big O notation is used.
2. it classifies/scales code by performance.
3. it gives a numeric grade to a solution.
4. it is useful for discussing tradeoffs between different approaches
5. helps identify inefficiencies in code.

### example 1

write a function that calculates the sum of all numbers from 1 up to and including some number n.

### solution 1

        function addUpTo(n){
            let total = 0;
            for(let i = 1; i <= n ; i++){
                total += i;
            }
            return total;
        }

    - operation of this code is dependant of n not including i++ which is also dependant of n. ie. 100 = 100, 1000 = 1000

### solution 2

        function addUpTo(n){
            return n * (n+1) / 2
        }

    - this code performs 3 operations (*, +, /) no matter what n is.

### what does better mean - speed & efficiency in memory > code comprehension & code length

1. faster?
2. less memory-intensive?
3. more readable?
4. less in code length?

# 2. time complexity

### speed testing - solution 2 is way faster!

        let t1 = performance.now();
        addUpTo(1000000000);
        let t2 = performance.now();
        console.log(`time elapsed: ${(t2-t1)/1000} seconds.`)

### summary

1. testing speed various with different machines. there for counting number of operations makes alot more sense.
2. Big O notation is a way to formalize fuzzy counting
3. it allows us to talk formally about how the runtime of an algorithm grows as the inputs grow, focused on trends.

### big O definition

- we say that an algorithm is O(f(n)) is the number of simple operations the computer has to do is eventually less a constant times F(n), as n increases

- f(n) could be linear (f(n) = n), see example 1 solution 1 O(n)
- f(n) could be quadratic (f(n) = n*n), *nested loops O(n^2)
- f(n) could be constant (f(n) = 1), see example 1 solution 2, O(1)
- f(n) could be something entirely different!

### simplifying Big O Expressions

1. constants dont matter O(2n) -> O(n), O(500) -> O(1), O(13n\*n) -> O(n^2) constants does not change the shape of the notation
2. smaller terms dont matter O(n+10) -> O(n), O(1000n+50) -> O(n), O(n*n + 5n + 8) -> O(n*n) smaller terms does not change the shape of the notation
3. arithmetic operations are constant
4. variable assignments are constant
5. accessing elements in an array or object is constant
6. loops complexity is the length of the loop and operations inside the loop

# 3. space complexity

- auxiliary space complexity - space required by the algorithm, not including space taken up by the input.
- most primitives such as booleans, numbers, undefined, null are constant spaces
- string require O(n) space where n is the string length
- arrays and objects are generally O(n), where n is the length for (arrays), or the number of keys for (objects).

### example 2

        function sum(arr){
            let total = 0;
            for(let i = 0; i <= arr.length; i++){
                total += arr[i];
            }

            return total;
        }

    - in terms of space this algorithm consist of 1 number variable "total", 1 number variable "i", *arr is not considered since it is input. we have constant space O(1)

### example 3

        function double(arr){
            let newArr = [];
            for(let i = 0; i <= arr.length; i++){
                newArr.push(2 * arr[i]);
            }

            return newArr;
        }

    - in terms of space this algorithm consist of 1 number variable "i", 1 array "newArr", *arr is considered since length of newArr is dependant of length of arr. we have linear space O(n)

# 3. logarithms

- logarithms are the inverse of exponents. ie. log2(8) = 3 --> 2^3 = 8
- log2(value) = exponent --> 2^exponent = value
- we'll omit the 2 since base number in big O notation is irrelevant, log === log2
- over all, O(1) <= O(log n) <= O(n) <= O(nlog n) <= O(n^2)

![Test Image 1](/bigO-trend-graph.png)
