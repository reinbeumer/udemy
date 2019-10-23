var mode = 'hard';
var numInput = document.querySelector('#numInput');
createBlocks(numInput.value);
var squares = document.querySelectorAll('.square');
var colors = generateRandomColors(squares.length);
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var reset = document.querySelector('#reset');
var easyButton = document.querySelector('#easy');
var hardButton = document.querySelector('#hard');
var allButons = document.querySelectorAll('button');
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
	hardButton.classList.add('hoverable');
	this.classList.remove('hoverable');
	createBlocks(Math.ceil(squares.length / 2));
	squares = document.querySelectorAll('.square');
	reRender();
});

hardButton.addEventListener('click', function() {
	this.classList.add('selected');
	this.disabled = true;
	mode = 'hard';
	easyButton.disabled = false;
	easyButton.classList.remove('selected');
	easyButton.classList.add('hoverable');
	this.classList.remove('hoverable');
	createBlocks(numInput.value);
	squares = document.querySelectorAll('.square');
	reRender();
});

reset.addEventListener('click', function() {
	// this.textContent = 'New Colors';
	numInput.disabled = false;
	easyButton.disabled = false;
	hardButton.disabled = false;
	easyButton.classList.add('hoverable');
	hardButton.classList.add('hoverable');
	document.querySelector('.selected').disabled = true;
	document.querySelector('.selected').classList.remove('hoverable');
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
	h1.style.backgroundColor = color;
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var colorArr = [];
	for (var i = 0; i < num; i++) {
		var returnedRandomColor = function(color) {
			if (colorArr.indexOf(color) === -1) {
				return color;
			} else {
				returnedRandomColor(randomColor());
			}
		};
		colorArr.push(returnedRandomColor(randomColor()));
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
	reset.textContent = 'New Colors';
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].addEventListener('click', function() {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = 'Correct';
				reset.textContent = 'Play Again?';
				hardButton.classList.remove('hoverable');
				easyButton.classList.remove('hoverable');
				easyButton.disabled = true;
				hardButton.disabled = true;
				numInput.disabled = true;
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
