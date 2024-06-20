class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SingleList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    print() {
        if (this.isEmpty()) {
            console.log("List Is Empty");
        } else {
            let temp = this.head;
            let listValue = '';
            while (temp) {
                listValue += `${temp.value} `;
                temp = temp.next;
            }
            console.log(listValue);
        }
    }

    append(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.getSize()) {
            console.log("Index Is Invalid");
            return;
        }
        if (index == 0) {
            this.prepend(value);
        } else {
            let node = new Node(value);
            let temp = this.head;
            for (let i = 0; i < index - 1; i++) {
                temp = temp.next;
            }
            node.next = temp.next;
            temp.next = node;
            this.size++;
        }
    }

    removeAt(index) {
        if (index < 0 || index > this.getSize()) {
            console.log("Index Is Invalid");
            return;
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        }
        else {
            let temp = this.head;
            for (let i = 0; i < index - 1; i++) {
                temp = temp.next;
            }
            removedNode = temp.next;
            temp.next = temp.next.next;
        }
        this.size--;
        console.log(removedNode.value);
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        let removedNode;
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let temp = this.head;
            while (temp.next && temp.next.value != value) {
                temp = temp.next;
            }
            if (temp.next) {
                removedNode = temp.next;
                temp.next = removedNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

}

let list = new SingleList();

console.log(list.isEmpty());
console.log(list.getSize());

list.print();
list.prepend(10);
list.prepend(20);
list.prepend(30);
// list.print();

list.append(90);
list.print();

list.insert(50, 0);
list.print();

list.insert(80, 3);
list.print();

list.removeAt(3)
list.print()