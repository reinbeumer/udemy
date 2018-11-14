/* eslint-disable no-console */
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
		retval += key.charCodeAt(i);
		total += key.charCodeAt(i);
	}
	var bucket = total % this.numBusckets;
	return bucket;
};

HashTabel.prototype.insert = function (key, value) {
	var index = this.hash(key);
	if (!this.buckets[index]) {
		this.buckets[index] = new HashNode(key, value);
	} else if (this.buckets[index].key === key) {
		this.buckets[index].value = value;
	} else {
		var currentNode = this.buckets[index];
		while (currentNode.next) {
			if (currentNode.next.key === key) {
				currentNode.next.value = value;
				return;
			}
			currentNode = currentNode.next;
		}
		currentNode.next = new HashNode(key, value);
	}
};

HashTabel.prototype.get = function (key) {
	var index = this.hash(key);
	if (!this.buckets[index]) {
		return null;
	} else {
		var currentNode = this.buckets[index];
		while (currentNode) {
			if (currentNode.key === key) {
				return currentNode.value;
			}
			currentNode = currentNode.next;
		}
		return null;
	}
};

HashTabel.prototype.retrieveAll = function () {
	var retVal = [];
	for (var i = 0; i < this.numBusckets; i++) {
		var currentNode = this.buckets[i];
		while (currentNode) {
			retVal.push(currentNode);
			currentNode = currentNode.next;
		}
	}
	return retVal;
};

var myHT = new HashTabel(1);
myHT.insert('Dean', 'deam@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@gmail.com');
myHT.insert('Dean', 'deanmachinn@gmail.com');
myHT.insert('Megan', 'megansmith@gmail.com');
myHT.insert('Dane', 'dane1010@outlook.com');
// myHT.insert('Dena', 'dena@outlook.com');
myHT.insert('Joe', 'joey@facebook.com');
myHT.insert('Samantha', 'sammy@twitter.com');

console.log(myHT.hash('Magazijn'));


// console.log(myHT.buckets);
console.log();