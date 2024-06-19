class myArray {
    constructor() {
        this.arr = {};
        this.length = 0;
    }

    //! add element at the last
    push(elelment) {
        this.arr[this.length] = elelment;
        this.length++;
        return this.length;
    }

    //!remove element from last
    pop() {
        if (this.length === 0) {
            return undefined;
        }

        let lastElement = this.arr[this.length - 1];
        delete this.arr[this.length - 1];
        this.length--;
        return lastElement;
    }

    //!add element at the beginning
    unshift(...elements) {
        for (let i = this.length - 1; i >= 0; i--) {
            this.arr[i + elements.length] = this.arr[i];   //?Shifting existing elements to right
        }

        for (let i = 0; i < this.length; i++) {    //?Adding the elements at the  first
            this.arr[i] = elements[i]
        }
        this.length += elements.length;
        return this.length;
    }

    //!Remove element from first 
    shift() {
        if (this.length == 0) {
            return undefined;
        }

        let firstEle = this.arr[0];
        for (let i = 0; i < this.length - 1; i++) {
            this.arr[i] = this.arr[i + 1];
        }
        delete this.arr[this.length - 1];
        this.length--;
        return firstEle;
    }

    //!find element at given index
    findElement(index) {
        return this.arr[index];
    }
}

const newarray = new myArray();

console.log(newarray.push(5));
console.log(newarray.push(10));
console.log(newarray.push(6));
console.log(newarray);
console.log(newarray.pop());
console.log(newarray.unshift(10, 20));
console.log(newarray);
