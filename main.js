
let winner = 0;
let loser = 0;
let draw = 0;

function computerPlay() {
	const selection = ['rock', 'paper', 'scissors'];
	const random = Math.floor(Math.random() * selection.length);
	const result = selection[random];
	return result;
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
		winner++;
		return 'You win';
	} else if (pS == 'paper' && cS == 'rock') {
		winner++;
		return 'You win';
	} else if (pS == 'paper' && cS == 'scissors') {
		loser++;
		return 'You Lose';
	} else if (pS == 'scissors' && cS == 'rock') {
		loser++;
		return 'You Lose';
	} else if (pS == 'scissors' && cS == 'paper') {
		winner++;
		return 'You win';
	}
}

function game() {
	for (let i = 0; i < 5; i++) {
		const input = prompt('Enter Choice');
		const playerSelection = input?.toLowerCase();
		const computerSelection = computerPlay();
        
		console.log(playRound(playerSelection, computerSelection));
        
	}
}

console.log(game());
console.log('--------------------');
console.log('win: '+ winner);
console.log('computer: '+ loser);
console.log('draw: ' + draw);
console.log('--------------------');


