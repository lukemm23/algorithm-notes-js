# problem solving patterns

### some possible patterns

- frequency counter (1)
- multiple pointers (2)
- sliding window
- divide and conquer (3)
- dynamic programming
- greedy algorithms
- backtracking

# 1. frequency counter

- this pattern uses objects or sets to collect values/frequencies of values
- this can often avoid the need for nested loops or O(n^2) operations with arrays/strings

### example 1

write and function called same, which accepts two arrays. the function should return true if every value in the array has it's corresponding value squared in the second array. the frequency of values must be the same.

same([1,2,3], [4,1,9]) //true
same([1,2,3], [1,9]) // false
same([1,2,3], [1,4,4]) // must be same frequency

naive solution - because its O(n^2), always try to avoid nested loops. (indexOf is a loop)

        function same(arr1, arr2){
           if(arr1.length !== arr2.length){
               return false;
           }

           for(i = 0; i < arr.length; i++){
                let correctIndex = arr2.indexOf(arr1[i] ** 2)
                if(correctIndex === -1){
                    return false;
                }
                arr2.splice(correctIndex, 1)
            }
        }

1. if the length of 2 arrays arent the same return false
2. loop thru array1
3. check what index of arr2 is equal to ^2 of a value in arr1
4. if -1 meaning correct value is not in arr2 then return false
5. if its not -1 meaning correct exists then remove the value out of the arr2
6. if all removed and never returned false then return true
7. note that if value is not removed when not false then frequency is not determined

frequency counter pattern solution - 3 seperate loops is always better than 1 nested loop

        function same(arr1, arr2){
            if(arr1.length !== arr2.length){
               return false;
           }

           let frequencyCounter1 = {}
           let frequencyCounter2 = {}

           for(let val of arr1){
               frequencyCounter1[val] = (frenquencyCounter1[val] || 0) + 1
           }
           for(let val of arr2){
               frequencyCounter2[val] = (frenquencyCounter2[val] || 0) + 1
           }

            for(let key in frequencyCounter1){
                if(!(key ** 2 in frequencyCounter2)){
                    return false;
                }
                if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
                    return false;
                }
            }

            return true
        }

1. if the length of 2 arrays arent the same return false
2. set empty frequency counter 1 and 2
3. for of loop arr1 and set each value of arr1 as key and number of times it exist as value for frequencyCounter1, add 1 if exist or 0 if dont exist
4. for of loop arr2 and set each value of arr2 as key and number of times it exist as value for frequencyCounter2, add 1 if exist or 0 if dont exist
5. for in loop frequencyCounter1
6. if the value of key ^2 is not in frequencyCounter2 return false, meaning ^2 value exist
7. if the key value is not the same value return false, meaning frequency is not correct

### example 2

given two strings, write a function to determine if the second string is an anagram of the first. an anagram is a word, phrase, or name formed by rearranging the letters of another, ie. cinema and iceman are anagrams.

validAnagram('','') //true
validAnagram('aaz','zza') //false
validAnagram('anagram','nagaram') //true
validAnagram('rat','car') //false
validAnagram('awesome','awesom') //false
validAnagram('qwerty','qeywrt') //true
validAnagram('texttwisttime','timetwisttext') //true

frequency counter pattern solution 1

        function validAnagram(first, second){
            if(first.length !== second.length){
                return false
            }

            const lookup = {};

            for(let i = 0; i<first.length; i++){
                let letter = first[i]
                lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
            }

            for(let i = 0; i<second.length; i++){
                let letter = second[i]
                if(!lookup[letter]){
                    return false;
                }else{
                    lookup[letter] -= 1;
                }
            }
            return true;
        }
        console.log(validAnagram('texttwisttime', 'timetwisttext'))

frequency counter pattern solution 2

        function validAnagram(str1, str2){
            if(str1.length !== str2.length){
                return false;
            }

            let freqCounter1 = {}
            let freqCounter2 = {}

            for (val of str1){
                freqCounter1[val] = (freqCounter1[val] || 0) + 1
            }
            for (val of str2){
                freqCounter2[val] = (freqCounter2[val] || 0) + 1
            }

            for(let key in freqCounter1){
                if(!(key in freqCounter2)){
                    return false;
                }
                if(freqCounter2[key] !== freqCounter1[key]){
                    return false;
                }
            }
        return true

        }
        console.log(validAnagram('texttwisttime', 'timetwisttext'))

# 2. multiple pointers

- creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
- very efficient for solving problems with minimal space complexity as well

### example 3

write a function called sumZero which accepts a sorted array of integers. the function should find the first pair where the sum is 0. return an array that includes both values that sum 0 or undefined if a pair does not exist.

sumZero([-3,-2,-1,0,1,2,3]) //[-3,3]
sumZero([-2,0,1,3]) //undefined
sumZero([1,2,3]) //undefined

naive solution - because its time complexity O(n^2), space complexity O(1), always try to avoid nested loops.

        function sumZero(arr){
            for(let i = 0; i < arr.length; i++){
                for(let j = i + 1; j < arr.length; j++){
                    if(arr[i] + arr[j] === 0){
                        return [arr[i], arr[j]];
                    }
            }
            }
        }

multiple pointers pattern solution - its time complexity O(n), space complexity O(1)

         function sumZero(arr){
            let left = 0;
            let right = arr.length -1;

            while(left < right){
                let sum = arr[left] + arr[right];

                if(sum === 0){
                    return [arr[left], arr[right]];
                }else if(sum > 0){
                    right --;
                }else{
                    left++;
                }
            }
        }

1. set left pointer from left at first position 0
2. set right pointer from right at last position length - 1
3. run as long as left pointer position is smaller than right pointer position (cross/middle position)
4. set sum equal to left pointer position value plus right pointer position value
5. if sum equal zero then return both value in an array
6. if sum is negative then move left pointer over to next position and compare
7. if sum is positive then move right pointer over to next position and compare

### example 4

implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. there can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) //2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7
countUniqueValues([]) //0
countUniqueValues([-2,-1,-1,0,1]) //4

multiple pointers pattern solution 1

        function countUniqueValues(arr){
            let pt1 = 0;
            let pt2 = 1;
            let count = 0;
            if(arr.length === 0){
                return count
            }
            while(pt2 <= arr.length){
                if(pt2 === arr.length){
                    count = pt1 + 1;
                    return count
                }
                if(arr[pt1] === arr[pt2]){
                    pt2 ++;
                }else if(arr[pt1] !== arr[pt2]){
                    pt1 ++;
                    arr[pt1] = arr[pt2];
                }
            }
        }

multiple pointers pattern solution 2

        function countUniqueValues(arr){
            if(arr.length === 0) return 0;
            let i = 0;

            for(let j = 1; j < arr.length; j++){
                if(arr[i] !== arr[j]){
                    i++;
                    arr[i] = arr[j]
                }
            }
            return i+1;
        }
