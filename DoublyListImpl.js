class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addFirst(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        if (this.head) {
            this.head.prev = newNode
        }
        this.head = newNode;
        this.size++;
    }

    addLast(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        newNode.prev = temp;
        temp.next = newNode;
        this.size++;
    }

    getSize() {
        return this.size;
    }

    insertAt(index, value) {
        if (index < 0 || index > this.getSize()) {
            console.log("INvalid Index");
            return;
        }

        let newNode = new Node(value);
        if (index === 0) {
            newNode.next = this.head;
            if (this.head) {
                this.head.prev = newNode
            }
            this.head = newNode;
            this.size++;
            return;
        }
        let temp = this.head;

        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        newNode.next = temp;
        newNode.prev = temp.prev;
        temp.prev.next = newNode;
        this.size++;
    }

    removeFirst() {
        if (!this.head) {
            console.log("Nothing to remove");
            return;
        }

        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        }
        this.size--;
    }

    removeLast() {
        if (!this.head) {
            console.log("NOthing to remove");
            return;
        }

        let temp = this.head;
        while (temp.next.next) {
            temp = temp.next;
        }
        temp.next = null;
        this.size--;
    }

    removeAt(index) {
        if (index < 0 || index > this.getSize()) {
            console.log("INvalid Index");
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
            this.size--;
            return;
        }

        let temp = this.head;
        for (let i = 0; i < index-1; i++){
            temp = temp.next;
        }

        temp.next = temp.next.next;
        if (temp.next) {
            temp.next.prev = temp;
        }
        this.size--;
    }

    print() {
        let temp = this.head;
        let listItems = ''
        while (temp) {
            listItems += `${temp.value} `;
            temp = temp.next;
        }
        console.log(listItems);
    }
}

let list = new DoublyList();

list.addFirst(10);
list.addLast(20);
list.addLast(30);
list.addLast(40);

// list.print();

list.insertAt(3, 35);
list.print();

// list.removeLast();
// list.print();

list.removeAt(2);
list.print();
