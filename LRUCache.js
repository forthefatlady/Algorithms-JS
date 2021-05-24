var capy = 0;
var size = 0;
var ll = null;
var map = new Map();

class Node {
    constructor(key, value, previous, next) {
        this.key = key;
        this.value = value;
        this.previous = previous;
        this.next = next;
    }
}

class DLL {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}

var LRUCache = function (capacity) {
    capy = capacity;
    ll = new DLL(null, null);
    size = 0;
    map = new Map();
};

LRUCache.prototype.get = function (key) {
    if (map.has(key)) {
        var node = map.get(key);
        this.put(key, node.value)
        return node.value;
    } else {
        return -1;
    }
};

DLL.prototype.dropLast =  function () {
    if (this.last && this.last.previous) {
        map.delete(this.last.key);
        this.last.previous.next = null;
        this.last = this.last.previous;
    } else {
        this.last = null;
        this.first = null;
    }
}

DLL.prototype.removeOld = function (key) {
    var old = map.get(key);
    map.delete(key);
    if (old != null) {
        size--;
        if (old.previous == null) {
            first = old.next
            if (first) first.previous = null;
        } else {
            old.previous.next = old.next;
        }
        if (old.next == null) {
            ll.last = old.previous;
            if (ll.last) ll.last.next = null;
        } else {
            old.next.previous = old.previous;
        }
    }
}

LRUCache.prototype.put = function (key, value) {
    var newNode = new Node(key, value, null, null);
    if (ll.first == null) {
        ll.first = newNode;
        ll.last = newNode
    } else {
        newNode.next = ll.first;
        ll.first = newNode;
        ll.first.next.previous = ll.first;
    }
    ll.removeOld(key);
    size++;
    if (size > capy) {
        ll.dropLast();
        size--;
    }
    map.set(key, newNode);
};

var json = JSON.parse(process.argv[2]);
var feedBack = [];
var lru = null;
json.forEach(function (value, i) {
    var result = null;
    if (i == 0) {
        lru = new LRUCache(value[0]);
    } else if (value.length == 2) {
        lru.put(value[0], value[1]);
    } else {
        result = lru.get(value[0]);
    }
    feedBack.push(result);
});
console.log(feedBack);