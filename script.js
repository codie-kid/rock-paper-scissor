let playerScore = 0;
let computerScore = 0;


function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}




window.onload = function () {
    loadScores();
};

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('triangle').style.display = 'none';
    document.getElementById('result').style.display = 'block';

    const playerPickedElement = document.getElementById('player-picked');
    const computerPickedElement = document.getElementById('computer-picked');

    playerPickedElement.style.border = getBorderStyle(playerChoice);
    playerPickedElement.style.backgroundImage = getBackgroundImage(playerChoice);

    computerPickedElement.style.border = getBorderStyle(computerChoice);
    computerPickedElement.style.backgroundImage = getBackgroundImage(computerChoice);

    if (playerChoice === computerChoice) {
        document.getElementById('result-text').textContent = 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        document.getElementById('result-text').textContent = 'You win!';
        playerScore++;

    } else {
        document.getElementById('result-text').textContent = 'You lose!';
        computerScore++;
    }

    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;

    saveScores();

    if (document.getElementById('result-text').textContent === 'You win!' || document.getElementById('result-text').textContent === 'You lose!') {
        document.getElementById('play-again').style.display = 'block';
        document.getElementById('against_pc').style.display = 'block';
        document.getElementById('replay').style.display = 'none';
        document.getElementById('next-button').style.display = 'block';

    } else {
        document.getElementById('play-again').style.display = 'none';
        document.getElementById('against_pc').style.display = 'none';
        document.getElementById('replay').style.display = 'block';
        document.getElementById('next-button').style.display = 'block';
    }

    if (document.getElementById('result-text').textContent === 'You win!') {
        document.getElementById('next-button').style.display = 'block';
        
    }
    if(computerScore < playerScore){
        document.getElementById('next-button').style.display = 'none';
    }
}
function getBorderStyle(choice) {
    switch (choice) {
        case 'rock':
            return '15px solid rgb(0, 116, 182)';
        case 'scissors':
            return '15px solid rgb(189, 0, 255)';
        case 'paper':
            return '15px solid rgb(255, 169, 67)';
    }
}

function loadScores() {
    if (localStorage.getItem('playerScore')) {
        playerScore = parseInt(localStorage.getItem('playerScore'));
    }
    if (localStorage.getItem('computerScore')) {
        computerScore = parseInt(localStorage.getItem('computerScore'));
    }

    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function saveScores() {
    localStorage.setItem('playerScore', playerScore);
    localStorage.setItem('computerScore', computerScore);
}



function playAgain() {
    document.getElementById('triangle').style.display = 'grid';
    document.getElementById('result').style.display = 'none';
    document.getElementById('winning-screen').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';

    // Reset the choices
    document.getElementById('player-picked').className = `choice ${playerChoice}`;
    document.getElementById('computer-picked').className = `choice ${computerChoice}`;
}

function nextpage() {
    document.getElementById('triangle').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('winning-screen').style.display = 'block';
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('head').style.display = 'none';
    // Reset the choices
    document.getElementById('player-picked').className = `choice ${playerChoice}`;
    document.getElementById('computer-picked').className = `choice ${computerChoice}`;
}
function getBackgroundImage(choice) {
    switch (choice) {
        case 'rock':
            return "url('icon_rock.png')";
        case 'scissors':
            return "url('icon_scissor.png')";
        case 'paper':
            return "url('icon_paper.png')";
    }
}

function playAgainWinning(){
    window.location = 'index.html';
}
