const startGameBtn = document.getElementById('start-game-btn');
const ROCK='ROCK';
const PAPER='PAPER';
const SCISSOR='SCISSOR';
const DEFAULT_USER_CHOISE='ROCK';
const RESULT_DRAW='DRAW';
const RESULT_PLAYER_WINS='PLAYER_WINS';
const RESULT_COMPUTER_WINES='COMPUTER_WINS';

let gameIsRunning=false;

const getPlayerCHoise =function()
{
const selection = prompt(`${ROCK},${PAPER} or ${SCISSOR} ?`,' ').toUpperCase();
if(selection !==ROCK && selection!==PAPER && selection!==SCISSOR)
{
alert(`Invalid choice! we chose ${DEFAULT_USER_CHOISE} for you!`);
return DEFAULT_USER_CHOISE;
}
return selection;
}

const getComputerChoice = () =>
{
const randomValue=Math.random();
if(randomValue<0.34)
{
return ROCK;
}
else if(randomValue<0.67)
{
return PAPER;
}
else
{
return SCISSOR;
}
}

const getWinner =function(Cchoise,Pchoise=DEFAULT_USER_CHOISE)
{
if(Cchoise==Pchoise)
{
return RESULT_DRAW;
}

else if((Cchoise=== ROCK && Pchoise===PAPER) || (Cchoise=== PAPER && Pchoise===SCISSOR) || (Cchoise=== SCISSOR && Pchoise===ROCK)) 
{
return RESULT_PLAYER_WINS;
}

else
{
return RESULT_COMPUTER_WINES;
}
}

startGameBtn.addEventListener('click',function()
{
if(gameIsRunning)
{
return;
}
gameIsRunning = true;
console.log('Gameing is starting...');
const playerChoise = getPlayerCHoise();
const computerChoise = getComputerChoice();
let winner;
if (playerChoise)
{
winner = getWinner(computerChoise, playerChoise);
}
else
{
winner = getWinner(computerChoise);
}
let message = `You picked ${playerChoise || DEFAULT_USER_CHOICE}, computer picked ${computerChoise}, therefore you `;
if (winner === RESULT_DRAW) 
{
message = message + 'had a draw.';
}
else if (winner === RESULT_PLAYER_WINS) 
{
message = message + 'won.';
}
else
{
message = message + 'lost.';
}
alert(message);
gameIsRunning = false;
});