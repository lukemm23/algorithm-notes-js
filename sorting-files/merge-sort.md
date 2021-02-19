# merge sort

- elementary algorithms like bubble, selection, and insertion sort do not scale well.
- they work well only with smaller size data structures.
- intermediate sorting algorithms like merge, radix, and quick sort works alot better with large chunk of data.
- in comparison by big O notations. these sort have time complexity of O(n log n) instead of O(n^2).
- tho there is a trade off between efficiency and simplicity
- the more efficient algorithms are the much less simple, and generally take longer to understand.

### merge sort overview

- its a combination of two things - merging and sorting
- it exploits the fact that arrays of 0 and 1 element are always sorted

### merging logic

- inorder to implement merge sort, its useful to first implement a function responsible for merging two sorted arrays.
- given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of two elements in the two input arrays.
- this function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it.

### merging logic pseudocode

- create an empty array, take a look at the smallest values in each input array
- while there are still values we haven't looked at...
  -if the value in the first array is smaller than the value in the second array, push the value in the first array into our result and move on to the next value in the first array.

  - if the value in the first array is larger than the value in the second array, push the value in the second array into our result and move on to the next value in the second array.
  - once we exhaust one array, push in all remaining values from the other array.

### merging logic example

        function merge(arr1, arr2){
            let results = [];
            let i = 0;
            let j = 0;
            while(i < arr1.length && j < arr2.length){
                if(arr1[i] < arr2[i]){
                    results.push(arr1[i])
                    i++
                }else{
                    results.push(arr2[j])
                    j++
                }
            }
            while(i < arr1.length){
              results.push(arr1[i])
              i++
            }
            while(j < arr2.length){
              results.push(arr2[j])
              j++
            }
            return results
        }

### merge sort pseudocode

- break up the array into halves until you have arrays that are empty or have one element, (hint: use recursion).
- once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
- once the array has been merged back together, return the merged (and sorted) array.

### merge sort example

        function merge(arr1, arr2){
            let results = [];
            let i = 0;
            let j = 0;
            while(i < arr1.length && j < arr2.length){
                if(arr1[i] < arr2[i]){
                    results.push(arr1[i])
                    i++
                }else{
                    results.push(arr2[j])
                    j++
                }
            }
            while(i < arr1.length){
              results.push(arr1[i])
              i++
            }
            while(j < arr2.length){
              results.push(arr2[j])
              j++
            }
            return results
        }

        function mergeSort(arr){
            if(arr.length <= 1)return arr;
            let mid = Math.floor(arr.length/2);
            let left = mergeSort(arr.slice(0, mid));
            let right = mergeSort(arr.slice(mid));

            return merge(left, right);
        }

### big O of merge sort

- O(n log n)
- O(n) - for the comparisons of number of arrays
- O(log n) - for spliting arrays

![merge sort](/images/merge-sort.png)
