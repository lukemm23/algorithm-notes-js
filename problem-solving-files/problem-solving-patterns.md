# problem solving patterns

### some possible patterns

- frequency counter (1)
- multiple pointers (2)
- sliding window (3)
- divide and conquer (4)
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

# 3. sliding window

- this pattern involves creating a window which can either be an array or number from one position to another.
- depending on a certain condition, the window either increases or closes (and a new window is created)
- very useful for keeping track of a subset of data in an array/string etc.

### example 5

write a function called maxSubarraySum which accepts an array of integers and a number called n. the function should calculate the maximum sum of n consecutive elements in the array.

maxSubarraySum([1,2,5,2,8,1,5], 2) //10
maxSubarraySum([1,2,5,2,8,1,5], 4) //17
maxSubarraySum([4,2,1,6], 1) //6
maxSubarraySum([4,2,1,6,2], 4) //13
maxSubarraySum([], 4) //null

naive solution - because its time complexity O(n^2), space complexity O(n), always try to avoid nested loops.

        function maxSubarraySum(arr, num){
            if(num > arr.length){
                return null;
            }

            let max = -Infinity;

            for(let i = 0; i < arr.length - num +1; i++){
                let temp = 0;
                for(let j = 0; j < num; j++){
                    temp += arr[i+j];
                }
                if(temp > max){
                    max = temp
                }
            }
            return max;
        }

1. account for edge case if window size is greater than arr.length then return null.
2. set max to negative infinity so temp value will replace max each time temp is greater than max.
3. loop as window towards end of arr, arr.length - num + 1 accounts for size of window plus 1 for index.
4. set temp to store the sum as each loop through
5. set inner loop to perform addition and set temp.
6. each time if temp is greater than max set max to temp.

sliding window pattern solution - its time complexity O(n), space complexity O(n)

        function maxSubarraySum(arr, num){
            let maxSum = 0;
            let tempSum = 0;

            if(num > arr.length){
                return null;
            }

            for(let i = 0; i < num; i++){
                    maxSum += arr[i];
            }

            tempSum = maxSum

            for(let i = num; i < arr.length; i++){
                tempSum = tempSum - arr[i-num] + arr[i];
                maxSum = Math.max(maxSum,tempSum);
            }

            return maxSum;
        }

1. account for edge case if window size is greater than arr.length then return null.
2. loop thru first 3 values only and record sum as maxSum.
3. set tempSum to first maxSum.
4. loop thru starting at the next index position which is num, add the new number to tempSum and subtract first number which is arr[i-num]
5. and set maxSum comparing each new tempSum to maxSum.

# 4. devide and conquer

- this pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
- this pattern can tremendously decrease time complexity.

### example 6

given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. if the value is not found, return -1.

search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1

naive solution - because its time complexity O(n), (linear search method)

        function search(arr, val){
            for(let i = 0; i < arr.length; i++){
                if(arr[i] === val){
                    return i;
                }
            }
            return -1;
        }

divide and conquer pattern solution - its time complexity O(log n), (binary search method)

        function search(arr, val){
            let min = 0;
            let max = arr.length - 1;

            while(min <= max){
                let middle = Math.floor((min+max) / 2);
                let currentElement = arr[middle];

                if(arr[middle] < val){
                    min = middle + 1;
                }
                else if(arr[middle] > val){
                    max = middle - 1;
                }
                else{
                    return middle;
                }
            }
            return -1;
        }

1. set min and max index, min starting at 0 index, and max starting a last index, arr.length-1
2. run while min is smaller than max loop, set middle value
3. if middle is smaller than val then shorten the while loop by setting min to middle + 1
4. if middle is greater than val then shorten the while loop by setting max to middle -1
5. then if val equal middle then return middle which is the value.
6. if while loop finish and nothing returned then return -1 since value is not there.
