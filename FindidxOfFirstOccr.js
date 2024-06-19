function getIdxOfFirstOccurance(haystack, needle) {
    if (needle.length > haystack.length) return -1;

    let i = 0, k = 0, j = 0;

    while (i < haystack.length) {
        while (needle[j] == haystack[k]) {
            j++;
            k++;

            if (j == needle.length) return i;
            if (k == haystack.length) return -1;
        }

        if (needle[j] !== haystack[k]) {
            i++;
            k = i;
            j = 0;
        }
    }
    return -1;
}


let haystack = "sdbutsad";
let needle = "sad";
console.log(getIdxOfFirstOccurance(haystack, needle));
