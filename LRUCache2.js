class LRULinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.count = 0;
        this.map = new Map();
    }

    add(kV) {
        this.remove(kV[0]);
        var node = new Node(this.first, kV[0], kV[1]);
        if (this.first == null) {
            this.last = node;
        } else {
            this.map.set(this.first.key, node);
        }
        this.first = node;
    }

    dropLast() {
        if (this.last) this.remove(this.last.key);
    }

    remove(key) {
        var node = null;
        if (this.last && this.last.key === key) {
            node = this.last;
            this.last = null;
        }
        if (this.first && this.first.key === key) {
            node = this.first;
            this.first = null;
        }
        var parent = this.map.get(key);
        if (parent !== undefined) {
            this.map.delete(key);
            node = parent.next;
            if (!node.next) {
                this.last = parent;
                parent.next = null;
            }
        }
        return node;
    }

    get(key) {
        if (this.first && this.first.key === key) {
            return this.first.value;
        }
        var value = null;
        if (value) this.add(key, value);
        return value;
    }
}

class Node {
    constructor(next, key, value) {
        this.next = next;
        this.key = key;
        this.value = value;
    }
}

var ll = new LRULinkedList();
ll.add([1, 1]);
ll.add([2, 2]);
ll.add([1, 1]);
ll.dropLast();
ll.dropLast();
console.log(ll);