function compMove(turn) {
  if (turn < 9) {
    taken = xMoves.concat(oMoves);
    leftMoves = possibleMoves.filter(function(val) {
      return taken.indexOf(val) == -1;
    });
    var rand = leftMoves[Math.floor(Math.random() * leftMoves.length)];
    document.getElementById(rand).innerHTML = whoseTurn(turn);
    evalMovesTaken(rand, whoseTurn(turn));
    evalGame();
  }
}
