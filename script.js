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
        computerChoice = 'Rock πΏ';
    }
    else if (randomNumber === 2) {
        computerChoice = 'Paper π΅';
    }
    else if (randomNumber === 3) {
        computerChoice = 'Scissors βοΈ'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "ITS A DRAW"
    }
    if (computerChoice === 'Rock πΏ' && userChoice === 'Paper π΅') {
        result = "YOU WIN"
        playerWins++;
    }
    if (computerChoice === 'Rock πΏ' && userChoice === 'Scissors βοΈ') {
        result = "YOU LOST"
        computerWins++;
    }
    if (computerChoice === 'Paper π΅' && userChoice === 'RockπΏ') {
        result = "YOU LOST"
        computerWins++;
    }
    if (computerChoice === 'Paper π΅' && userChoice === 'Scissors βοΈ') {
        result = "YOU WIN"
        playerWins++;
    }
    if (computerChoice === 'Scissors βοΈ' && userChoice === 'Paper π΅') {
        result = "YOU LOST"
        computerWins++;
    }
    if (computerChoice === 'Scissors βοΈ' && userChoice === 'Rock πΏ') {
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








