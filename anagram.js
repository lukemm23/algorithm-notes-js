

function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    if(str1.length !== str2.length){
        console.log('length not equal')
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
            console.log('key not equal')
            return false;
        }
        if(freqCounter2[key] !== freqCounter1[key]){
            console.log('freq not equal')
            return false;
        }
    }

    return true
    
  }


  console.log(validAnagram('texttwisttime', 'timetwisttext'))
