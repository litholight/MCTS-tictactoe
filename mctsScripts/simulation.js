let turn = 0;
let xMoves = [];
let oMoves = [];
let taken = [];
let player = "X"
const possibleMoves =
  ["sA1","sA2","sA3",
   "sB1","sB2","sB3",
   "sC1","sC2","sC3"];
let leftMoves = possibleMoves.filter(function(val) {
     return taken.indexOf(val) == -1;
   });
let winMoves = [
  ["sA1","sA2","sA3"],
  ["sB1","sB2","sB3"],
  ["sC1","sC2","sC3"],
  ["sA1","sB1","sC1"],
  ["sA2","sB2","sC2"],
  ["sA3","sB3","sC3"],
  ["sA1","sB2","sC3"],
  ["sC1","sB2","sA3"]];

whoseTurn(0);
initGame();

function whoseTurn(turn) {
  if (turn % 2 === 0) {
    player = "X";
  } else {
    player = "O";
  }
  turn++;
  console.log("turn", turn);
  console.log("whoseturn", player);
  return player;
}

function initGame() {
  var rand = leftMoves[Math.floor(Math.random() * leftMoves.length)];
  document.getElementById(rand).innerHTML = whoseTurn(turn);
  evalMovesTaken(rand, whoseTurn(turn));
}

function evalMovesTaken(currentMove, player) {
  if (player === "X") {
    xMoves.push(currentMove);
    // creates an array that combines x moves and o moves
    taken = xMoves.concat(oMoves);
    // creates an array of left moves
    leftMoves = possibleMoves.filter(function(val) {
      return taken.indexOf(val) == -1;
    });
    if (turn < 9) {
      compMove(turn);
    } else {
      document.getElementById("gameResult").innerHTML = "The game is a draw!";
    }
  }
  if (turn < 9) {
    oMoves.push(currentMove);
      compMove(turn);
  } else {
      document.getElementById("gameResult").innerHTML = "The game is a draw!";
  }
}

function playMove(cell) {
  if (turn % 2 === 0) {
    turn++;
    evalMovesTaken(cell, "X");
    evalGame();
    return "X";
  }
}

function evalGame() {
  let isWon = false;
  for (var i in winMoves) {
     if (winMoves[i].every(val => xMoves.includes(val))) {
       isWon = true;
       document.getElementById("gameResult").innerHTML = "X has won the game!";
       break;
     } else if (winMoves[i].every(val => oMoves.includes(val))) {
       isWon = true;
       document.getElementById("gameResult").innerHTML = "O has won the game!";
     } else {
       // isWon = false;
       // compMove();
     }
  }
}
