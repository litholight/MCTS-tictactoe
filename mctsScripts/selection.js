// initialize root to be node x = A1

let root = {
  "one": "A1"
};

console.log(root["one"]);
document.getElementById(root["one"]).innerHTML = whoseTurn(0);
evalMovesTaken(root["one"], whoseTurn(0));
