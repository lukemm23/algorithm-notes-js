# selection sort

- similar to bubble sort, but instead of first placing the large values into sorted position, it places small values into sorted position.
- the opposite of bubble sort

### ways to swap

        es5
        function swap(arr, idx1, idx2){
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
        }

        es2015
        const swap = (arr, idx1, idx2)=>{
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
        }

### selection sort pseudocode

- store the first element as the smallest value you've seen so far
- loop through array and find smaller values, set new smallest value at the end of loop
- swap smallest value with first value in the array
- start looping again starting from the second value since first value is now a sorted value
- repeat until all values are sorted values.

### selection sort example

        function selectionSort(arr){
            for(let i=0; i<arr.length; i++){
                let lowest = i;
                for(let j=i+1; j<arr.length; j++){
                    if(arr[j] < arr[lowest]){
                        lowest = j;
                    }
                }
                if(i !== lowest){
                    let temp = arr[i];
                    arr[i] = arr[lowest];
                    arr[lowest] = temp;
                }
            }
            return arr;
        }

### Big O of selection sort

- time complexity of O(n^2)

### benefits

- if the goal is to minimize the number of swaps, then selection sort could be a good choice.
