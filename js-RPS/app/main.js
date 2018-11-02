let choices = [
  {
    name: "Rock",
    id: 0,
    beats: 2
  },
  {
    name: "Paper",
    id: 1,
    beats: 0
  },
  {
    name: "Scissors",
    id: 2,
    beats: 1
  }
]

function getNum(max) {
  return Math.floor(Math.random() * max);
}

function play(num) {
  let compChoice = choices[getNum(3)]
  let playerChoice = choices[num]
  // WHAT YOU'RE RETURNING
  let result = `${playerChoice.name} vs ${compChoice.name} \n`
  // MODIFYING RESULT AS A TIE, WIN, OR LOSE
  if (playerChoice.id == compChoice.id) {
    result += 'Tie';
  } else if (playerChoice.beats == compChoice.id) {
    result += 'Player Win';
  } else {
    result += 'Player Lose'
  }
  document.getElementById('result').innerText = result;
}