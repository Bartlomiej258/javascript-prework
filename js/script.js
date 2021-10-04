
function getMoveName(argMoveId){
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
function displayResult(argComputerMove, argPlayerMove) {
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

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

//--------------------------------------------

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

//---------------------------------------------
displayResult(computerMove, playerMove);



  