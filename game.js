let turn = 1;

let xMoves = [];
let yMoves = [];
let winMoves = [
  ["A1","A2","A3"],
  ["B1","B2","B3"],
  ["C1","C2","C3"]];

function playerMove(cell) {
  turn++;
  if (turn % 2 === 0) {
    xMoves.push(cell);
    console.log("xMoves", xMoves);
    hasWon();
    return "X";
  } else {
    yMoves.push(cell);
    console.log("yMoves", yMoves);
    return "O"
  }
}

function hasWon() {
  let isWon = false;
  for (var i in winMoves) {
    // alert(winMoves[i]);
    // console.log("winMoves[i]",winMoves[i]);
     if (winMoves[i].every(val => xMoves.includes(val))) {
       isWon = true;
       break;
     } else {
       isWon = false;
     }
  }
  console.log(isWon);
}


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
