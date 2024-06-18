function uniqueElementCount(arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[j] != arr[i]) {
            j++;
            arr[j] = arr[i];
        }
    }
    return j+1;
}

let arr = [1, 2, 2, 3, 4, 4];
console.log(uniqueElementCount(arr));