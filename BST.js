function BST(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

BST.prototype.insert = function (value) {
	if (value <= this.value) {
		if (!this.left) {
			this.left = new BST(value);
		} else {
			this.left.insert(value);
		}
	} else {
		if (!this.right) {
			this.right = new BST(value);
		} else {
			this.right.insert(value);
		}
	}
};

BST.prototype.contains = function (value) {
	if (value === this.value) {
		return true;
	} else {
		if (value < this.value) {
			if (!this.left) {
				return false;
			} else {
				return this.left.contains(value);
			}
		} else {
			if (!this.right) {
				return false;
			} else {
				return this.right.contains(value);
			}
		}
	}
};

BST.prototype.depthFirstTraversal = function (itteratorFunct, order) {
	if (order === 'pre-order') {
		itteratorFunct(this.value);
	}
	if (this.left) {
		this.left.depthFirstTraversal(itteratorFunct, order);
	}
	if (order !== 'post-order') {
		itteratorFunct(this.value);
	}
	if (this.right) {
		this.right.depthFirstTraversal(itteratorFunct, order);
	}
	if (order === 'post-order') {
		itteratorFunct(this.value);
	}
};

BST.prototype.brethFirstTraversal = function (itteratorFunct) {
	var queue = [this];
	while (queue.length) {
		var treeNode = queue.shift();
		itteratorFunct(treeNode);
		if (treeNode.left) {
			queue.push(treeNode.left);
		}
		if (treeNode.right) {
			queue.push(treeNode.right);
		}
	}
};

BST.prototype.getMinVal = function (itteratorFunct) {
	if (this.left) {
		return this.left.getMinVal(itteratorFunct);
	} else {
		return this.value;
	}
};

BST.prototype.getMaxVal = function () {
	if (this.right) {
		return this.right.getMaxVal();
	} else {
		return this.value;
	}
};

var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);
// console.log(bst.contains(105));
// bst.depthFirstTraversal(log, 'in-order');

// eslint-disable-next-line no-unused-vars
function log(value) {
	console.log(value);
}

// eslint-disable-next-line no-unused-vars
function log2(node) {
	console.log(node.value);
}

// bst.brethFirstTraversal(log2);
// bst.getMinVal();
console.log('MIN: ' + bst.getMinVal());
console.log('MAX: ' + bst.getMaxVal());

function factorial(num) {
	if (num === 1) {
		return num;
	} else {
		return num * factorial(num - 1);
	}
}
for (var i = 100; i > 0; i--) {
	console.log(i + ' => ' + factorial(i));
}