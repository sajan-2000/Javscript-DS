class CustomMap {
    constructor() {
        this.items = {};
        this.count = 0;
    }

    set(key, value) {
        if (!this.has(key)) {
            this.count++;
        }
        this.items[key] = value;
    }

    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }

    delete(key) {
        if (this.has(key)) {
            delete this.items[key];
            this.count--;
            return true;
        }
        return false;
    }

    has(key) {
        return Object.prototype.hasOwnProperty.call(this.items, key);
    }

    clear() {
        this.items = {};
        this.count = 0;
    }

    size() {
        return this.count;
    }

    keys() {
        return Object.keys(this.items);
    }

    values() {
        return Object.values(this.items);
    }

}

const map = new CustomMap();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

console.log('Map size:', map.size());
console.log('All values:', map.values());
