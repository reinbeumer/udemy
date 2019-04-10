var ScoreKeeper = function () {
	var p1Button = document.querySelector('#p1');
	var p2Button = document.getElementById('p2');
	var resetButton = document.getElementById('reset');
	var p1ScoreDisplay = document.getElementById('p1ScoreDisplay');
	var p2ScoreDisplay = document.getElementById('p2ScoreDisplay');
	var numInput = document.querySelector('input[type="number"]');
	var winScore = document.getElementById('winScore');
	var p1Score = 0;
	var p2Score = 0;
	var gameOver = false;

	p1Button.addEventListener('click', function () {
		if (!gameOver) {
			p1Score++;
			p1ScoreDisplay.textContent = p1Score;
			if (p1Score == winScore.innerHTML) {
				p1ScoreDisplay.classList.add("winner");
				gameOver = true;
				numInput.disabled = true;
				p1Button.disabled = true;
				p2Button.disabled = true;
			}
		}
	})

	p2Button.addEventListener('click', function () {
		if (!gameOver) {
			p2Score++;
			p2ScoreDisplay.textContent = p2Score;
			if (p2Score == winScore.innerHTML) {
				p2ScoreDisplay.classList.add("winner");
				gameOver = true;
				numInput.disabled = true;
				p1Button.disabled = true;
				p2Button.disabled = true;
			}
		}
	})

	resetButton.addEventListener('click', function () {
		p1Score = 0;
		p2Score = 0;
		p1ScoreDisplay.textContent = p1Score;
		p2ScoreDisplay.textContent = p2Score;
		gameOver = false;
		p1ScoreDisplay.classList.remove("winner");
		p2ScoreDisplay.classList.remove("winner");
		winScore.textContent = 5;
		numInput.value = '';
		numInput.disabled = false;
		p1Button.disabled = false;
		p2Button.disabled = false;

	})

	numInput.addEventListener('input', function () {
		winScore.textContent = this.value;
		p1Score = 0;
		p2Score = 0;
		p1ScoreDisplay.textContent = p1Score;
		p2ScoreDisplay.textContent = p2Score;
		p1ScoreDisplay.classList.remove("winner");
		p2ScoreDisplay.classList.remove("winner");
	})
}
new ScoreKeeper();