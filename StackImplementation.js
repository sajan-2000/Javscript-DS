class MyStack {
    constructor() {
        this.elements = [];
    }

    push(element) {
        this.elements.push(element);
    }

    pop() {
        if (this.elements.length == 0) {
            return "Stack is Empty";
        }
        return this.elements.pop();
    }

    peek() {
        if (this.elements.length == 0) {
            return "Stack is Empty";
        }
        return this.elements[this.elements.length - 1];
    }

    isEmpty() {
        return this.elements.length === 0;
    }

    size() {
        return this.elements.length;
    }

    clear() {
        this.elements = [];
    }

    print() {
        console.log(this.elements);
    }
}

let stack = new MyStack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());
console.log(stack.size());

console.log(stack.pop());
console.log(stack.size());

stack.print();