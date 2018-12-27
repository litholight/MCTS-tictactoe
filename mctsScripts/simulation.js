let turn = 0;
let xMoves = [];
let oMoves = [];
let taken = [];
let player = "X"
const possibleMoves =
["A1","A2","A3",
 "B1","B2","B3",
 "C1","C2","C3"];
let leftMoves = possibleMoves.filter(function(val) {
     return taken.indexOf(val) == -1;
   });
let winMoves = [
  ["A1","A2","A3"],
  ["B1","B2","B3"],
  ["C1","C2","C3"],
  ["A1","B1","C1"],
  ["A2","B2","C2"],
  ["A3","B3","C3"],
  ["A1","B2","C3"],
  ["C1","B2","A3"]];

whoseTurn(0);

function whoseTurn(turn) {
  if (turn % 2 === 0) {
    player = "X";
  } else {
    player = "O";
  }
  return player;
}

compMove(turn);

function evalMovesTaken(currentMove, player) {
  if (player === "X") {
    xMoves.push(currentMove);
    turn++;
    // creates an array that combines x moves and o moves
    taken = xMoves.concat(oMoves);
    // creates an array of left moves
    leftMoves = possibleMoves.filter(function(val) {
      return taken.indexOf(val) == -1;
    });
    if (turn < 9) {
      evalGame();
      compMove(turn);
    } else {
      evalGame();
      document.getElementById("gameResult").innerHTML = "The game is a draw!";
    }
  }
  if (turn < 9) {
    turn++;
    oMoves.push(currentMove);
    evalGame();
    compMove(turn);
  } else {
      evalGame();
      document.getElementById("gameResult").innerHTML = "The game is a draw!";
  }
}

function evalGame() {
  let isWon = false;
  for (var i in winMoves) {
     if (winMoves[i].every(val => xMoves.includes(val))) {
       isWon = true;
       document.getElementById("gameResult").innerHTML = "X has won the game!";
       turn = 9;
       break;
     } else if (winMoves[i].every(val => oMoves.includes(val))) {
       isWon = true;
       document.getElementById("gameResult").innerHTML = "O has won the game!";
       turn = 9;
     }
  }
}
