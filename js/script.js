{
const playGame = function (playerInput){
    
clearMessages();

const getMoveName = function (argMoveId){
    if(argMoveId == 1){
        return 'kamień';
      }
    else if(argMoveId == 2) {
        return 'papier';
      }
    else if(argMoveId == 3) {
        return 'nożyce';
      }
}
const displayResult = function (argComputerMove, argPlayerMove) {
    console.log(argComputerMove);
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
      }
    else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
          printMessage('Ty wygrywasz!');
      }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
              printMessage('Ty wygrywasz!');
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Niestety przegrywasz!');
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Niestety przegrywasz!');
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Niestety przegrywasz!');
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
        printMessage('Remis!');
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
        printMessage('Remis!');
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
        printMessage('Remis!');
    }
    else {
        printMessage('nieznany ruch!')
    } 
}
// computer turn
const randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

const computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

//player turn

console.log('Gracz wpisał: ' + playerInput);

const playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

// display result
displayResult(computerMove, playerMove);
}

const buttonFirst = document.getElementById('play-rock');
buttonFirst.addEventListener('click' , function() {
    playGame('1');
});
const buttonPaper = document.getElementById('play-paper');
buttonPaper.addEventListener('click', function() {
    playGame('2');
});
const buttonScissors = document.getElementById('play-scissors');
buttonScissors.addEventListener('click', function() {
    playGame('3');
});
}



  