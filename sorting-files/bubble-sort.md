# bubble sort

- a sorting algorithm where the largest values bubble up to the top

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

### bubble sort pseudocode

- starting looping from with a variable called i the end of the array towards the beginning
- start an inner loop with a variable called j from the beginning until i-1
- if arr[j] is greater than arr[j+1], perform swap with those two values
- return sorted array

### less optimized method - array length is NOT reduced at each loop thru

        function bubbleSort(arr){
            for(let i=0; i<arr.length; i++){
                for(let j=0; j<arr.length; j++){
                    if(arr[j] > arr[j+1]){
                        let temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                    }
                }
            }
            return arr;
        }

### more optimized method - array length IS reduced at each loop thru, as i reduces j reduces

        function bubbleSort(arr){
            for(let i=arr.length; i<0; i--){
                for(let j=0; j< i-1; j++){
                    if(arr[j] > arr[j+1]){
                        let temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                    }
                }
            }
            return arr;
        }

### down fall

- bubble sort will not quickly evaluate but keeps going to finish its whole process even tho sometimes the sorting is already complete unless no swaps detection is implemented

### most optimized method - implementing noSwaps detection to break out of the loop early when sorting complete.

        function bubbleSort(arr){
            let noSwaps;

            for(let i=arr.length; i<0; i--){
                noSwaps = true;
                for(let j=0; j< i-1; j++){
                    if(arr[j] > arr[j+1]){
                        let temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                        noSwaps = false;
                    }
                }
            }

            if(noSwaps) break;
            return arr;
        }

### Big O of bubble sort

- time complexity of O(n^2)
