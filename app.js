var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissor = document.getElementById('scissor');
var userLabel = document.getElementById('user-score');
var computerLabel = document.getElementById('computer-score');
var finalResult = document.getElementById('final-result');
var computerOptions = ['rock', 'paper', 'scissor'];
var computerScore = 0;
var userScore = 0;
var isUserWinner = false;
var isTie = false;


rock.addEventListener('click', function() {
    checkWinner('rock');
});

paper.addEventListener('click', function() {
    checkWinner('paper');
});

scissor.addEventListener('click', function() {
    checkWinner('scissor');
});

function checkWinner(userChoice) {
    var computerChoice = computerOptions[getRandomChoice()];
    console.log('computer choice is => ' + computerChoice);

    switch(computerChoice) {
        case 'rock':
            if(userChoice == 'scissor') computerWin(); 
            else if(userChoice == 'paper') userWin();
            else tie();
            break;
        
        case 'paper':
            if(userChoice == 'rock') computerWin();
            else if(userChoice == 'scissor') userWin();
            else tie();
            break;

        case 'scissor':
            if(userChoice == 'paper') computerWin();
            else if(userChoice == 'rock') userWin();
            else tie();
            break;
    }

    finalResultMessage(computerChoice, userChoice);
    isUserWinner = false;
    isTie = false;
}

function userWin() {
    isUserWinner = true
    userScore++;
    userLabel.innerText = userScore;
}

function computerWin() {
    isUserWinner = false;
    computerScore++;
    computerLabel.innerText = computerScore;
}

function tie() {
    isTie = true;
}

function finalResultMessage(computerChoice, userChoice) {
    var message = '';
    if(!isTie){
        if(isUserWinner) {
            switch(userChoice){
                case 'rock': 
                    message = 'Rock Destroy Scissor, You Win!';     
                    break;
                case 'paper': 
                    message = 'Paper Covers Rock, You Win!';     
                    break;
                case 'scissor': 
                    message = 'Scissor Cut Paper, You Win!';     
                    break;
            }

        } else {
            switch(computerChoice) {
                case 'rock': 
                    message = 'Rock Destroy Scissor, Computer Win!';     
                    break;
                case 'paper': 
                    message = 'Paper Covers Rock, Computer Win!';     
                    break;
                case 'scissor': 
                    message = 'Scissor Cut Paper, Computer Win!';     
                    break;
            }
        }
    } else {
        message = 'Tie!!';
    }

   finalResult.innerText = message;

}

function getRandomChoice() {
    return Math.ceil(Math.random() * 10) % 3;
}
