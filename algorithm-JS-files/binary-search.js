// function binarySearch(arr, val){
//     let min = 0;
//     let max = arr.length - 1;

//     while(min <= max){
//         let middle = Math.floor((min+max) / 2);
//         let currentElement = arr[middle];

//         if(arr[middle] < val){
//             min = middle + 1;
//         }
//         else if(arr[middle] > val){
//             max = middle - 1;
//         }
//         else{
//             return middle;
//         }
//     }
//     return -1;
// }


function binarySearch(arr, val){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start+end) / 2);

    while(arr[middle] !== val && start <= end){
        if(val < arr[middle]){
            end = middle - 1;
            
        }
        else{
            start = middle + 1;
        }
        middle = Math.floor((start+end) / 2);
    }

    if(arr[middle] === val)return middle;

    return -1;
}

console.log(binarySearch([1,2,3,4,5],11))