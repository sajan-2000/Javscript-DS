class MyQueue {
    constructor() {
        this.elements = [];
    }

    enqueue(element) {
        this.elements.push(element);
    }

    dequeue() {
        if (this.elements.length == 0) {
            return "Stack is empty";
        }
        return this.elements.shift();
    }

    front() {
        if (this.elements.length == 0) {
            return "Stack is empty";
        }
        return this.elements[0];
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

let queue = new MyQueue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front());
console.log(queue.size());

console.log(queue.dequeue());
console.log(queue.size());

queue.print();