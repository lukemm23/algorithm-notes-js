# problem solving

### overview

- define what an algorithm is
- devise a plan to solve algorithms
- compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer

### what is algorithms and why

- a process or a set of steps to accomplish a certain task.
- almost everything in programming involves some kind of algorithm.
- its the foundation for being a sucessful problem solving and developer.

### how to improve

- devise a plan for solving problems
- master common problem solving patterns, categorize

### problem solving strategies

1. understand the problem
2. explore concrete examples
3. break it down
4. solve and simplify
5. look back and refactor

# 1. understand the problem

1. can you restate the problem in your own words?
2. what are the inputs that go into the problem?
3. what are the outputs that should come from the solution to the problem?
4. can the outputs be determined from the inputs? do you have enough information to solve?
5. how should i label the important pieces of data that are a part of the problem?

### example 1

write a function which takes two numbers and returns their sum.

UNDERSTANDING

1. implement addition
2. any 2 numbers, taking in account the language, what kind of numbers, size? decimals?
3. result of addition, int? float? string?
4. yes
5. sum || result

# 2. concrete examples

1. start with simple examples
2. progress to more complex examples
3. explore examples with edge cases, empty inputs, invalid inputs

### example 2

write and function which takes in a string and return the counts of each character in the string

EXAMPLES

        1. simple examples
        execute: charCount("aaaa");
        return: {a:4}

        2. more complex examples
        execute: charCount("hello");
        return {h:1, e:1, l:2, o:1};

        3. should other unused characters so count of 0?
        4. what if string is multiple words? spaces count?
        5. should casing be accounted for?
        6. what about numbers?
        7. what about empty string inputs?
        8. what about invalid inputs like a number, or a null, or a object?

# 3. break it down - explicitly write out the steps you need to take.

### example 2 - cont

write and function which takes in a string and return the counts of each character in the string

- return an object with the keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters.

BREAKDOWN

        function charCount(str){
            // make object to return as result
            // make all char in string lowercase
            // loop through string
                // if the char is a num/str and is a key in object, add 1 to count
                // if the char is a num/str and not in object,  add it to object and set value to 1
                // if the char is not a num/str ie. space, period, etc. dont do anything
            // return result
        }

# 4. solve or simplify - if you cant solve, solve a simpler problem.

1. find the core difficulty in what your trying to do
2. temporarily ignore that difficulty
3. write a simplified solution
4. then incorporate that difficulty back in

### example 2 - cont

SIMPLIFY

        function charCount(str){
           // how to manipulate str case?
           // how to loop through the str?
           // how to write conditional statements for account for all scenarios?
           // how to manipulate the object?
        }

SOLVE

        function charCount(str){
            // make object to return as result
            let result = {};

            // make all char in string lowercase
            str.toLowerCase();

            // loop through string
            for(i=0; i<=str.length; i++){
                let char = str[i]
                if(result[char] > 0){
                    // if the char is a num/str AND is a key in object, add 1 to count
                    result[char]++;
                }else{
                     // if the char is a num/str AND not in object,  add it to object and set value to 1
                    result[char] = 1;
                }

            }

                // if the char is not a num/str ie. space, period, etc. dont do anything

            // return result
            return result;
        }

- the only thing left would be the difficult part, how to deal with none str/num characters. tackle the difficulty and implement into
  rest of the solution.

# 5. look back and refactor

1. can you check the result? tested?
2. can you derive the result differently? other solutions?
3. can you understand it at a glance? readability? clean code?
4. can you use the result or method for some other problem?
5. can you improve the performance of your solution? what's its Big-O
6. can you think of other ways to refactor? consistency? abide guidelines?
7. how have other people solved this problem? if yes, which is better? comparisons?

### example 2 - cont

first solution

        function charCount(str){
            let result = {};
            for(i=0; i<=str.length; i++){
                let char = str[i].toLowerCase();
               if(/[a-z0-9]/.test(char)){
                   if(result[char] > 0){
                    result[char]++;
                   }else{
                       result[char] = 1;
                   };
               }
            }
            return result;
        }

refactored solution phase 1

        function charCount(str){
            let result = {};
            for(char of str){
                char.toLowerCase();
                if(/[a-z0-9]/.test(char)){
                   if(result[char] > 0){
                    result[char]++;
                   }else{
                       result[char] = 1;
                   };
               }
            }
            return result;
        }

refactored solution phase 2

        function charCount(str){
            let result = {};
            for(char of str){
                char.toLowerCase();
                if(/[a-z0-9]/.test(char)){
                   result[char] = ++result[char] || 1;
               }
            }
            return result;
        }

other possibilities

1. replace regex check with charCode check for performance? and how to implement it?
2. where is the best place to run toLowerCase()? possibly close to object manipulation is best for performance.
