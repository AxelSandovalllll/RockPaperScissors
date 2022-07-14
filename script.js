const startGame = prompt(`Ready to play some Rock Paper Scissors? YES or NO`);

if (startGame == 'yes' || startGame == 'Yes' || startGame == 'YES') {
    alert(`Let's do this!`)
} else {
    alert('please come back again')
}

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const playerWinsDisplay = document.getElementById('playerGamesWon');
const computerWinsDisplay = document.getElementById('compGamesWon');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;
let playerWins = 0;
let computerWins = 0;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = 'Rock 🗿';
    }
    else if (randomNumber === 2) {
        computerChoice = 'Paper 💵';
    }
    else if (randomNumber === 3) {
        computerChoice = 'Scissors ✂️'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "ITS A DRAW"
    }
    if (computerChoice === 'Rock 🗿' && userChoice === 'Paper 💵') {
        result = "YOU WIN"
        playerWins++;
    }
    if (computerChoice === 'Rock 🗿' && userChoice === 'Scissors ✂️') {
        result = "YOU LOST"
        computerWins++;
    }
    if (computerChoice === 'Paper 💵' && userChoice === 'Rock🗿') {
        result = "YOU LOST"
        computerWins++;
    }
    if (computerChoice === 'Paper 💵' && userChoice === 'Scissors ✂️') {
        result = "YOU WIN"
        playerWins++;
    }
    if (computerChoice === 'Scissors ✂️' && userChoice === 'Paper 💵') {
        result = "YOU LOST"
        computerWins++;
    }
    if (computerChoice === 'Scissors ✂️' && userChoice === 'Rock 🗿') {
        result = "YOU WIN"
        playerWins++;
    }
    if (playerWins == 2) {
        alert(`You chose ${userChoice}, while computer chose ${computerChoice} ....YOU ARE THE CHAMPION!!!!`)
        playerWins = 0;
        computerWins = 0;
        result = '';
    }
    if (computerWins == 2) {
        playerWins = 0;
        computerWins = 0;
        result;
        alert(`you chose ${userChoice}, while computer chose ${computerChoice} ... GAME OVER... TRY AGAIN`)
    }
    resultDisplay.innerHTML = result
    playerWinsDisplay.innerHTML = playerWins
    computerWinsDisplay.innerHTML = computerWins
    resultDisplay.innerHTML = result
}








