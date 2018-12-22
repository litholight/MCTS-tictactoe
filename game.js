let turn = 1;

function playerTurn() {
  turn++;
  if (turn % 2 === 0) {
    return "X";
  } else {
    return "0"
  }
}


// cells in row A
document.getElementById("tdA1").addEventListener("click", function(){this.innerHTML = playerTurn();});
document.getElementById("tdA2").addEventListener("click", function(){this.innerHTML = playerTurn();});
document.getElementById("tdA3").addEventListener("click", function(){this.innerHTML = playerTurn();});

// cells in row B
document.getElementById("tdB1").addEventListener("click", function(){this.innerHTML = playerTurn();});
document.getElementById("tdB2").addEventListener("click", function(){this.innerHTML = playerTurn();});
document.getElementById("tdB3").addEventListener("click", function(){this.innerHTML = playerTurn();});

// cells in row C
document.getElementById("tdC1").addEventListener("click", function(){this.innerHTML = playerTurn();});
document.getElementById("tdC2").addEventListener("click", function(){this.innerHTML = playerTurn();});
document.getElementById("tdC3").addEventListener("click", function(){this.innerHTML = playerTurn();});
