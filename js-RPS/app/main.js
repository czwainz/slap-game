//create array of choices with ids
//show which RPS beats the other RPS
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

//generate a random number for computer to choose from
function getNum(max) {
  return Math.floor(Math.random() * max);
}

//have computer choice and player choice and use game logic

function play(num) {
  let compChoice = choices[getNum(3)]
  let playerChoice = choices[num]
  // WHAT YOU'RE RETURNING
  let result = `${playerChoice.name} vs ${compChoice.name} \n`
  // MODIFYING RESULT AS A TIE, WIN, OR LOSE
  if (playerChoice.id == compChoice.id) {
    result += 'Tie';
  } else if (playerChoice.beats == compChoice.id) {
    result += 'Player Wins';
  } else {
    result += 'Player Loses'
  }
  document.getElementById('result').innerText = result;
}