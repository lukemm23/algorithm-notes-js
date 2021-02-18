# insertion sort

- builds up the sort by gradually creating a larger half which is always sorted.

### insertion sort pseudocode

- start by picking the second element in the array
- now compare the second element with the one before it and swap if necessary
- continue to the next element and if it is in the incorrect order
- iterate through the sorted portion if the array
- place the element in the correct place
- repeat until the array is completely sorted

### insertion sort example - notice inner for loop j have to be >=0 and arr[j] > currentVal or else go to next value.

        function insertionSort(arr){
            for(let i=1; i<arr.length; i++){
                let currentVal = arr[i];
                for(let j=i-1; j>= 0 && arr[j] > currentVal; j--){
                    arr[j+1] = arr[j]
                }
                arr[j+1] = currentVal;
            }
            return arr;
        }

### Big O of insertion sort

- time complexity of O(n^2)

### benefits

- insertion sort is great with data thats nearly sorted, and bad with data that needs alot of sorting and swaping.
- ie. if a data set has one unsorted value coming in and needs to be sorted against large sorted portion then insertion sort will be a great choice.
