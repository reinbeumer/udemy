/* eslint-disable no-console */
function LinkedList() {
	this.head = null;
	this.tail = null;
}

function Node(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
}


LinkedList.prototype.addToHead = function (value) {
	var newNode = new Node(value, this.head, null);
	if (this.head) {
		this.head.prev = newNode;
	} else {
		this.tail = newNode;
	}
	this.head = newNode;
};

LinkedList.prototype.addToTail = function (value) {
	var newNode = new Node(value, null, this.tail);
	if (this.tail) {
		this.tail.next = newNode;
	} else {
		this.head = newNode;
	}
	this.tail = newNode;
};

LinkedList.prototype.removeHead = function () {
	if (!this.head) {
		return null;
	} else {
		var val = this.head.value;
		this.head = this.head.next;
		if (this.head) {
			this.head.prev = null;
		} else {
			this.tail = null;
		}
		return val;
	}
};

LinkedList.prototype.removeTail = function () {
	if (!this.tail) {
		return null;
	} else {
		var val = this.tail.value;
		this.tail = this.tail.prev;
		if (this.tail) {
			this.tail.next = null;
		} else {
			this.head = null;
		}
		return val;
	}
};

LinkedList.prototype.search = function (searchValue) {
	var currentNode = this.head;
	while (currentNode) {
		if (currentNode.value === searchValue) {
			return true;
		} else {
			currentNode = currentNode.next;
		}
	}
	return false;
};

LinkedList.prototype.indexOff = function (searchValue) {
	var retval = [];
	var currentNode = this.head;
	var currentIndex = 0;
	while (currentNode) {
		if (currentNode.value === searchValue) {
			retval.push(currentIndex);
		}
		currentNode = currentNode.next;
		currentIndex++;
	}
	if (retval.length === 0) {
		return null;
	}
	return retval;
};
var ll = new LinkedList();
ll.addToHead(10);
ll.addToHead(20);
ll.addToHead(30);
ll.addToTail(10);
ll.addToTail(20);
ll.addToTail(30);
ll.addToHead(10);
ll.addToHead(20);
ll.addToHead(30);
ll.addToTail(10);
ll.addToTail(20);
ll.addToTail(30);

console.log(ll.indexOff(10));