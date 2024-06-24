function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const array = [2, 3, 4, 10, 40];
const target = 10;
console.log('Index of target:', linearSearch(array, target));
