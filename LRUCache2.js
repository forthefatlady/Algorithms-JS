class LRULinkedList {
    constructor () {
        this.first = null;
        this.last = null;
        this.count = 0;
        this.map = new Map();
    }

    add (kV) {
        var node = new Node(this.first, kV[0], kV[1]);
        if (this.first == null) {
            this.last = node;
        } else {
            this.map.set(this.first.key, node);
        }
        this.first = node;
    }

    drop() {
        if (this.last) {
            var parent = this.map.get(this.last.key);
            if (parent !== undefined) {
                this.map.delete(this.last.key);
                parent.next = null;
            } else {
                this.first = null;
            }
            this.last = parent
        }
    }

    get (key) {
        if (this.first && this.first.key === key) {
            return this.first.value;
        }

        var parent = this.map.get(key);
        if (parent !== undefined) {
            this.map.delete(key);
            var node = parent.next;
            if (node != null) {
                var value = node.value;
                parent.next = node.next;
                if (!parent.next) {
                    this.last = parent;
                }
                this.add([key, value]);
                return value;
            }
        }
    }
}

class Node {
    constructor (next, key, value) {
        this.next = next;
        this.key = key;
        this.value = value;
    }
}

// we should be mapping the key to the parent node, so we can find the node holding the value (stored in k-v form)
// the paren

var ll = new LRULinkedList();
ll.add([1, 1]);
ll.add([2, 2]);
ll.add([3, 3]);
console.log(ll);
console.log(ll.last);
ll.drop();
console.log(ll);
ll.drop();
console.log(ll);