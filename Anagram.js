
function checkAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }

    let charCount = {};

    for (let char of string1) {
        if (charCount[char]) {
            charCount[char]++
        } else {
            charCount[char] = 1;
        }
    }

    for (let item of string2) {
        if (!charCount[item]) {
            return false;
        } else {
            charCount[item]--;
        }
    }

    for (let key of charCount) {
        if (charCount[key] !== 0) {
            return false;
        }
    }
    return true;
}

let str1 = "sajapn";
let str2 = "naajas";
console.log(checkAnagram(str1, str2));
