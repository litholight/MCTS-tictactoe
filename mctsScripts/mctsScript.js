function compMove(turn) {
  taken = xMoves.concat(oMoves);
  leftMoves = possibleMoves.filter(function(val) {
    return taken.indexOf(val) == -1;
  });
  var rand = leftMoves[Math.floor(Math.random() * leftMoves.length)];
  console.log("turn", turn);
  console.log("leftMoves", leftMoves);
  if (turn >= 9) {
    console.log("true");
    evalGame();
  } else {
    document.getElementById(rand).innerHTML = whoseTurn(turn);
    evalMovesTaken(rand, whoseTurn(turn));
    evalGame();
  }

}
