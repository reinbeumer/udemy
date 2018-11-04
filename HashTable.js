function HashTabel(size) {
    this.buckets = Array(size);
    this.numBusckets = this.buckets.length;
}

function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
}

HashTabel.prototype.hash = function (key) {
    var total = 0;
    for (var i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
    }
    var bucket = total % this.numBusckets;
    return bucket;
}

HashTabel.prototype.insert = function (key, value) {
    var index = this.hash(key);
    if (!this.buckets[index]) {
        this.buckets[index] = new HashNode(key, value);
    } else if (this.buckets[index].key === key) {
        this.buckets[index].value = value;
    } else {
        var currentNode = this.buckets[index];
        while (currentNode.next) {
            if (currentNode.next.key === Key) {
                currentNode.next.value = value;
                return;
            }
            currentNode = currentNode.next;
        }
        currentNode.next = new HashNode(key, value);
    }
}

var myHT = new HashTabel(30);
myHT.insert('Dean', 'deam@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@gmail.com')
myHT.insert('Dean', 'deanmachinn@gmail.com');
myHT.insert('Megan', 'megansmith@gmail.com');
myHT.insert('Dane', 'dane1010@outlook.com')
console.log(myHT.buckets);
console.log();