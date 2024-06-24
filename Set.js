class CustomSet {
    constructor() {
        this.items = {};
        this.count = 0;
    }

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            this.count++;
            return true;
        }
        return false;
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            this.count--
            return true;
        }
        return false;
    }

    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }

    values() {
        return Object.values(this.items);
    }

    clear() {
        this.items = {};
        this.count = 0;
    }

    getSize() {
        return this.count;
    }

    union(otherset) {
        let unionSet = new CustomSet();
        this.values().forEach(element => unionSet.add(element));
        otherset.values().forEach(element => unionSet.add(element));
        return unionSet;
    }

    intersection(otherSet) {
        let interSet = new CustomSet();
        this.values().forEach(element => {
            if (otherSet.has(element)) {
                interSet.add(element);
            }
        })
        return interSet;
    }

    isSubSetOf(otherSet) {
        return this.values().every(element => otherSet.has(element));
    }
}

const setA = new CustomSet();
setA.add(1);
setA.add(2);
setA.add(3);

console.log(setA.values());
const setB = new CustomSet();
setB.add(2);
setB.add(3);
setB.add(4);

console.log('Set A:', setA.values());
console.log('Set B:', setB.values());

const unionSet = setA.union(setB);
console.log('Union:', unionSet.values());