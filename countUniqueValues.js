function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
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

console.log(countUniqueValues([]))

