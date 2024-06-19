class MyString {
    constructor(value = "") {
        this.value = value.toString();
    }

    length() {
        return this.value.length;
    }

    concat(otherString) {
        return this.value += otherString;
    }

    charAt(index) {
        if (index < 0 || index >= this.value.length) {
            return undefined;
        }
        return this.value[index];
    }

    indexOf(substring) {
        return this.value.indexOf(substring);
    }

    slice(start, end) {
        return this.value.slice(start, end);

    }

    toUpperCase() {
        return this.value.toUpperCase();

    }

    toLowerCase() {
        return this.value.toLowerCase();
    }

}

let str = new MyString("Sajan");
console.log(str.length());
console.log(str.concat(" How are you?"));
console.log(str.charAt(2));
console.log(str.slice(2, 5));
console.log(str.toUpperCase());