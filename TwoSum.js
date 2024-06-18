function findTwoSum(arr, target) {
    let resultObj = {};
    
    for (let i = 0; i < arr.length; i++){

        let restNum = target - arr[i];
        
        if (resultObj.hasOwnProperty(restNum)) {
            return ([resultObj[restNum], i]);
        }

        resultObj[arr[i]] = i;
    }
    return [];
}

let arr = [2, 7, 11, 13];
let target = 9;
console.log(findTwoSum(arr, target));
