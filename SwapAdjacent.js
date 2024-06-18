function swapAdjacent(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}
let array = [1, 70, 2, 5, 4]
console.log(swapAdjacent(array));