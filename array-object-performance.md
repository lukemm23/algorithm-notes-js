# performance of data structures and built in methods in terms of Big-O

- understand how objects and arrays work, through the lens of Big-O
- explain why adding elements to the beginning of an array is costly
- compare and contrast the runtime for arrays and objects, as well as built-in methods.

# 1. Objects - unordered, key value pairs

### example 1

        let instructor = {
            firstName: "kelly",
            isInstructor: true,
            favoriteNumbers: [1,2,3,4]
        }

### when to use objects

- when you dont need order
- when you need fast access / insertion or removal

### Big-O of Objects

- insertion: O(1)
- removal: O(1)
- searching: O(n)
- access: O(1)

### Big-O of Object methods

- Object.keys: O(n)
- Object.values: O(n)
- Object.entries: O(n)
- hasOwnProperty: O(1)

# 2. Arrays - ordered lists

### example 2

        let names = ["Michael", "Melissa", "Andrea"];
        let values = [true, [], {}, 2, "awesome"];

### when to use arrays

- when you need order
- when you need fast access / insertion and removal (sort of...)

### Big-O of Arrays

- insertion: depends....
  .push(): adding to end of array since it doesnt need re-indexing, O(1)
  .unshift(): adding to beginning of array since it needs re-indexing, O(n)
- removal: depends....
  .pop(): removing from end of array since it doesnt need re-indexing, O(1)
  .shift(): removing from beginning of array since it needs re-indexing, O(n)
- searching: O(n)
- access: O(1)

### Big-O of Array methods

- array.push: O(1) || array.pop: O(1)
- array.unshift: O(n) || array.shift: O(n)
- array.concat: O(n)
- array.slice: O(n)
- array.splice: O(n)
- array.sort: O(n \* log n)
- array.forEach, map, filter, reduce, etc. O(n)
