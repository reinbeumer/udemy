var numOfBlocks = 6;
var colors = generateRandomColors(numOfBlocks);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var reset = document.querySelector('#reset')
var easyButton = document.querySelector('#easy');
var hardButton = document.querySelector('#hard');

easyButton.addEventListener('click', function () {
	this.classList.add('selected');
	hardButton.classList.remove('selected');
	numOfBlocks = 3;
	reRender();
})

hardButton.addEventListener('click', function () {
	this.classList.add('selected');
	easyButton.classList.remove('selected');
	numOfBlocks = 6;
	reRender();
})

reset.addEventListener('click', function () {
	this.textContent = "New Colors";
	reRender();
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	squares[i].addEventListener('click', function () {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = 'Correct';
			reset.textContent = "Play Again?"
			changeColor(pickedColor);
			h1.style.backgroundColor = pickedColor;
		} else {
			this.style.background = '#232323';
			messageDisplay.textContent = 'Try again';
		}
	})
}

function changeColor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}

}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var colorArr = [];
	for (var i = 0; i < num; i++) {
		colorArr.push(randomColor());
	}
	return colorArr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function reRender() {
	colors = generateRandomColors(numOfBlocks);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor
	for (var i = 0; i < squares.length; i++) {
		if (i < colors.length) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "initial";
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = 'steelblue';
	messageDisplay.textContent = '';
}