
let win = 0;
let loser = 0;
let draw = 0;

//Bot random Selection
function computerPlay() {
	const selection = ['rock', 'paper', 'scissors'];
	const random = Math.floor(Math.random() * selection.length);
	const result = selection[random];
	return result;
}

function winner() {
	const container = document.querySelector('#container');
	const msg = document.createElement('h3');

	if (win === 5) {
		msg.innerHTML = "You are the winner";
		container.appendChild(msg);
	}else if(loser === 5){
		msg.innerHTML = "You lost to a computer";
		container.appendChild(msg);
	}
}

function playRound(a, b) {
	const pS = a;
	const cS = b;

		if (pS == 'rock' && cS == 'rock') {
			draw++;
			return 'Draw';
		} else if (pS == 'paper' && cS == 'paper') {
			draw++;
			return 'Draw';
		} else if (pS == 'scissors' && cS == 'scissors') {
			draw++;
			return 'Draw';
		} else if (pS == 'rock' && cS == 'paper') {
			loser++;
			return 'You Lose';
		} else if (pS == 'rock' && cS == 'scissors') {
			win++;
			return 'You win';
		} else if (pS == 'paper' && cS == 'rock') {
			win++;
			return 'You win';
		} else if (pS == 'paper' && cS == 'scissors') {
			loser++;
			return 'You Lose';
		} else if (pS == 'scissors' && cS == 'rock') {
			loser++;
			return 'You Lose';
		} else if (pS == 'scissors' && cS == 'paper') {
			win++;
			return 'You win';
		}
	
}

function game(playerSelect) {
		const playerSelection = playerSelect?.toLowerCase();
		const computerSelection = computerPlay();
		
		if(win < 5 && loser < 5){ 
			console.log(playRound(playerSelection, computerSelection));
		}else{
			winner();
		}

		playerScore.innerHTML = win;
		botScore.innerHTML = loser;
		drawScore.innerHTML = draw;
        
}



const pRock = document.getElementById('rock');
const pPaper = document.getElementById('paper');
const pScissors = document.getElementById('scissors');



function start() {
	pRock.addEventListener('click', (send => game('rock')));
	pPaper.addEventListener('click', (send => game('paper')));
	pScissors.addEventListener('click', (send => game('Scissors')));
	

	let playerScore = document.getElementById('playerScore');
	let botScore = document.getElementById('botScore');
	let drawScore = document.getElementById('drawScore');

}

start()

// console.log('--------------------');
// console.log('win: '+ win);
// console.log('computer: '+ loser);
// console.log('draw: ' + draw);
// console.log('--------------------');







