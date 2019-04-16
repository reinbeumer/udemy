var mode = 'hard';
var numInput = document.querySelector('#numInput');
var squares = document.querySelectorAll('.square');
var colors = generateRandomColors(squares.length);
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var reset = document.querySelector('#reset');
var easyButton = document.querySelector('#easy');
var hardButton = document.querySelector('#hard');
reRender();

numInput.addEventListener('input', function() {
	var num = this.value;
	if (mode === 'easy') {
		num = Math.ceil(this.value / 2);
	}
	createBlocks(num);
	squares = document.querySelectorAll('.square');
	reRender();
});

easyButton.addEventListener('click', function() {
	this.classList.add('selected');
	this.disabled = true;
	mode = 'easy';
	hardButton.disabled = false;
	hardButton.classList.remove('selected');
	createBlocks(Math.ceil(squares.length / 2));
	squares = document.querySelectorAll('.square');
	reRender();
});

hardButton.addEventListener('click', function() {
	this.classList.add('selected');
	this.disabled = true;
	mode = 'easy';
	easyButton.disabled = false;
	easyButton.classList.remove('selected');
	createBlocks(numInput.value);
	squares = document.querySelectorAll('.square');
	reRender();
});

reset.addEventListener('click', function() {
	this.textContent = 'New Colors';
	easyButton.disabled = false;
	hardButton.disabled = false;
	// hardButton.classList.add('selected');
	reRender();
});

function createBlocks(num) {
	document.getElementById('container').innerHTML = '';
	for (var i = 0; i < num; i++) {
		document.getElementById('container').innerHTML +=
			'<div class="square"></div>';
	}
}

function changeColor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
	document.querySelector('.selected').style.background = color;
	h1.style.backgroundColor = color;
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
	colors = generateRandomColors(squares.length);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].addEventListener('click', function() {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = 'Correct';
				reset.textContent = 'Play Again?';
				hardButton.disabled = true;
				easyButton.disabled = true;
				changeColor(pickedColor);
			} else {
				this.style.background = '#232323';
				messageDisplay.textContent = 'Try again';
			}
		});
	}
	document.querySelector('.selected').style = '';
	h1.style.backgroundColor = 'steelblue';
	messageDisplay.textContent = '';
}
