function compMove() {
  taken = xMoves.concat(oMoves);
  leftMoves = possibleMoves.filter(function(val) {
    return taken.indexOf(val) == -1;
  });
  var rand = leftMoves[Math.floor(Math.random() * leftMoves.length)];
  turn++;
  document.getElementById(rand).innerHTML = "O";
  evalMovesTaken(rand, "O");
  evalGame();
}
