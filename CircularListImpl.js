class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addFirst(value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.head.next = this.head;
        } else {
            let temp = this.head;
            while (temp.next !== this.head) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    addLast(value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.head.next = this.head;
        } else {
            let temp = this.head;

            while (temp.next !== this.head) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = this.head;
        }
        this.size++;
    }

    removeStart() {
        if (!this.head) {
            console.log("Nothing is there to remove");
            return;
        }

        if (this.head.next === this.head) {
            this.head = null;
            return;
        } else {
            let temp = this.head;
            while (temp.next !== this.head) {
                temp = temp.next;
            }
            temp.next = this.head.next;
            this.head = this.head.next;
        }
        this.size--;
    }

    removeEnd() {
        if (!this.head) {
            console.log("Nothing is there to remove");
            return;
        }

        if (this.head.next === this.head) {
            this.head = null;
            return;
        } else {
            let temp = this.head;
            let prev = null;
            while (temp.next !== this.head) {
                prev = temp;
                temp = temp.next;
            }
            prev.next = this.head;
        }
        this.size--;
    }

    removeATany(index) {
        if (index < 0 || index > this.getSize()) {
            console.log("Invalid Index");
            return;
        }

        if (index === 0) {
            if (this.size === 1) {
                this.head = null;
            } else {
                let temp = this.head;
                while (temp.next !== this.head) {
                    temp = temp.next;
                }
                temp.next = this.head.next;
                this.head = this.head.next;
            }
        } else {
            let temp = this.head;
            let prev = null;
            for (let i = 0; i < index; i++) {
                prev = temp;
                temp = temp.next;
            }
            prev.next = temp.next;
        }

        this.size--;
    }

    display() {
        if (!this.head) {
            console.log("Nothing is there in LIst");
            return;
        }
        let temp = this.head;
        do {
            console.log(temp.value);
            temp = temp.next;
        } while (temp !== this.head)
    }

    getSize() {
        return this.size();
    }
}