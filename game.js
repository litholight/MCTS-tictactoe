let turn = 0;

let xMoves = [];
let oMoves = [];
let taken = [];
let winMoves = [
  ["A1","A2","A3"],
  ["B1","B2","B3"],
  ["C1","C2","C3"],
  ["A1","B1","C1"],
  ["A2","B2","C2"],
  ["A3","B3","C3"],
  ["A1","B2","C3"],
  ["C1","B2","A3"]];

function playerMove(cell) {
  if (turn % 2 === 0) {
    turn++
    xMoves.push(cell);
    evalGame();
    return "X";
  } else {
    turn++
    oMoves.push(cell);
    evalGame();
    return "O"
  }
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


// cells in row A
document.getElementById("A1").addEventListener("click", function(){if (this.innerHTML !== "X" && this.innerHTML !== "O") {this.innerHTML = playerMove("A1")}});
document.getElementById("A2").addEventListener("click", function(){if (this.innerHTML !== "X" && this.innerHTML !== "O") {this.innerHTML = playerMove("A2")}});
document.getElementById("A3").addEventListener("click", function(){if (this.innerHTML !== "X" && this.innerHTML !== "O") {this.innerHTML = playerMove("A3")}});

// cells in row B
document.getElementById("B1").addEventListener("click", function(){if (this.innerHTML !== "X" && this.innerHTML !== "O") {this.innerHTML = playerMove("B1")}});
document.getElementById("B2").addEventListener("click", function(){if (this.innerHTML !== "X" && this.innerHTML !== "O") {this.innerHTML = playerMove("B2")}});
document.getElementById("B3").addEventListener("click", function(){if (this.innerHTML !== "X" && this.innerHTML !== "O") {this.innerHTML = playerMove("B3")}});

// cells in row C
document.getElementById("C1").addEventListener("click", function(){if (this.innerHTML !== "X" && this.innerHTML !== "O") {this.innerHTML = playerMove("C1")}});
document.getElementById("C2").addEventListener("click", function(){if (this.innerHTML !== "X" && this.innerHTML !== "O") {this.innerHTML = playerMove("C2")}});
document.getElementById("C3").addEventListener("click", function(){if (this.innerHTML !== "X" && this.innerHTML !== "O") {this.innerHTML = playerMove("C3")}});
