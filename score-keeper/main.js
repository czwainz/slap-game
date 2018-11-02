let players = [
  {
    name: "Player 1",
    score: 0
  },
  {
    name: "Player 2",
    score: 0
  }
]
let scoreToWin = 11;

function incrementScore(index) {
  players[index].score++;
  document.getElementById("player1").innerText = players[0].score.toString();
  document.getElementById("player2").innerText = players[1].score.toString();
  if (players[index].score >= scoreToWin && Math.abs(players[0].score - players[1].score) >= 2) {
    document.getElementById('my-title').innerText = players[index].name + " Won!"
    document.getElementById('game').style.pointerEvents = 'none'
  }
}

function setScoreToWin(targetScore) {
  scoreToWin = targetScore
}