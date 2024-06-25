function insertion(arr) {

    for (let i = 1; i < arr.length; i++){
        let numberToInsert = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = numberToInsert;
    }
    return arr;
}
let arr = [11, 2, 23, 5, 55];
insertion(arr)
console.log(arr);
