let turn = 1;

let xMoves = [];
let yMoves = [];
let winMoves = [[A1,A2,A3],[],[]];

function playerMove(cell) {

  turn++;
  if (turn % 2 === 0) {
    xMoves.push(cell);
    console.log("xMoves", xMoves);
    return "X";
  } else {
    yMoves.push(cell);
    console.log("yMoves", yMoves);
    return "O"
  }
}

// function hasWon() {
//
// }


// cells in row A
document.getElementById("A1").addEventListener("click", function(){this.innerHTML = playerMove("A1");});
document.getElementById("A2").addEventListener("click", function(){this.innerHTML = playerMove("A2");});
document.getElementById("A3").addEventListener("click", function(){this.innerHTML = playerMove("A3");});

// cells in row B
document.getElementById("B1").addEventListener("click", function(){this.innerHTML = playerMove("B1");});
document.getElementById("B2").addEventListener("click", function(){this.innerHTML = playerMove("B2");});
document.getElementById("B3").addEventListener("click", function(){this.innerHTML = playerMove("B3");});

// cells in row C
document.getElementById("C1").addEventListener("click", function(){this.innerHTML = playerMove("C1");});
document.getElementById("C2").addEventListener("click", function(){this.innerHTML = playerMove("C2");});
document.getElementById("C3").addEventListener("click", function(){this.innerHTML = playerMove("C3");});
