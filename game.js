let turn = 0;
let xMoves = [];
let oMoves = [];
let taken = [];
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

function initGame(who) {
  if (who === "computer") {
    console.log('Initialized computer');
    var rand = leftMoves[Math.floor(Math.random() * leftMoves.length)];
    document.getElementById(rand).innerHTML = "O";
    evalMovesTaken(rand, "O");
  } else {
    console.log('Initialized me');
  }
}


function evalMovesTaken(currentMove, player) {
  if (player === "X") {
    xMoves.push(currentMove);
    taken = xMoves.concat(oMoves);
    leftMoves = possibleMoves.filter(function(val) {
      return taken.indexOf(val) == -1;
    });
    console.log('leftMoves', leftMoves);
    console.log("xMoves",xMoves);
    if (turn < 9) {
      compMove();
    } else {
      document.getElementById("gameResult").innerHTML = "The game is a draw!";
    }
  }
  if (player === "O") {
    oMoves.push(currentMove);
    console.log("oMoves",oMoves);
  }
}

function playMove(cell) {
  if (turn % 2 === 0) {
    turn++;
    console.log('turn', turn);
    evalMovesTaken(cell, "X");
    evalGame();
    return "X";
  }
}

function compMove() {
  taken = xMoves.concat(oMoves);
  leftMoves = possibleMoves.filter(function(val) {
    return taken.indexOf(val) == -1;
  });
  var rand = leftMoves[Math.floor(Math.random() * leftMoves.length)];
  turn++;
  console.log('turn', turn);
  document.getElementById(rand).innerHTML = "O";
  evalMovesTaken(rand, "O");
  evalGame();
}

// function isTaken(cell) {
//   let taken = xMoves.concat(oMoves);
//   let help = false;
//   taken.forEach(function(entry) {
//     console.log("cell", cell);
//     console.log("entry", entry);
//     if (cell === entry) {
//       help = true;
//     }
//   });
//   return help;
// }

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
       isWon = false;
     }
  }

}

document.getElementById("computer").addEventListener("click", function() {initGame("computer");});
document.getElementById("me").addEventListener("click", function() {initGame("me");});


// cells in row A
document.getElementById("A1").addEventListener("click", function(){if (this.innerHTML !== "X" && this.innerHTML !== "O") {this.innerHTML = playMove("A1")}});
document.getElementById("A2").addEventListener("click", function(){if (this.innerHTML !== "X" && this.innerHTML !== "O") {this.innerHTML = playMove("A2")}});
document.getElementById("A3").addEventListener("click", function(){if (this.innerHTML !== "X" && this.innerHTML !== "O") {this.innerHTML = playMove("A3")}});

// cells in row B
document.getElementById("B1").addEventListener("click", function(){if (this.innerHTML !== "X" && this.innerHTML !== "O") {this.innerHTML = playMove("B1")}});
document.getElementById("B2").addEventListener("click", function(){if (this.innerHTML !== "X" && this.innerHTML !== "O") {this.innerHTML = playMove("B2")}});
document.getElementById("B3").addEventListener("click", function(){if (this.innerHTML !== "X" && this.innerHTML !== "O") {this.innerHTML = playMove("B3")}});

// cells in row C
document.getElementById("C1").addEventListener("click", function(){if (this.innerHTML !== "X" && this.innerHTML !== "O") {this.innerHTML = playMove("C1")}});
document.getElementById("C2").addEventListener("click", function(){if (this.innerHTML !== "X" && this.innerHTML !== "O") {this.innerHTML = playMove("C2")}});
document.getElementById("C3").addEventListener("click", function(){if (this.innerHTML !== "X" && this.innerHTML !== "O") {this.innerHTML = playMove("C3")}});
