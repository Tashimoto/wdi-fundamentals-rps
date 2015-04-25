////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove(move) {
    return getInput();
}

function getComputerMove(move) {
    return randomPlay();
}

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var winner;
    if(((playerMove === 'rock') && (computerMove === 'scissors')) ||
        ((playerMove === 'scissors') && (computerMove === 'paper')) ||
        ((playerMove === 'paper') && (computerMove === 'rock')))
        winner = 'player';
    else if (((playerMove === 'rock') && (computerMove === 'rock')) ||
        ((playerMove === 'scissors') && (computerMove === 'scissors')) ||
        ((playerMove === 'paper') && (computerMove === 'paper')))
        winner = 'tie';
    else if (((playerMove === 'scissors') && (computerMove === 'rock')) ||
        ((playerMove === 'paper') && (computerMove === 'scissors')) ||
        ((playerMove === 'rock') && (computerMove === 'paper')))
        winner = 'computer';
    else
        console.log("Error");
    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerMove;
    var computerMove;
    var playerWins = 0;
    var computerWins = 0;
    var whoWon;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.

   while ((computerWins < 5) && (playerWins < 5)) {
       playerMove = getPlayerMove();
       computerMove = getComputerMove();
       console.log("The computer chose: " + computerMove + '\n');
       whoWon = getWinner(playerMove, computerMove);
       if (whoWon === 'computer')
           computerWins += 1;
       else if (whoWon === 'player')
           playerWins += 1;
       console.log("Your score is " + playerWins + ".");
       console.log("The computer's score is " + computerWins + "." + '\n');
   }

    if(playerWins > computerWins)
        console.log("You win!!");
    else if(computerWins > playerWins)
        console.log("The computer wins!!");
    else
        console.log("There was an error.");

}

playToFive();