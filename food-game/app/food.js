let chrissy = {
  foodCount: 0,
  healthIndex: 100,
  moodIndex: 0,
  moods: [
    { name: 'Yoga', image: 'app/yoga.jpg' },
    { name: 'Happy', image: 'app/happy.jpg' },
    { name: 'Super Happy', image: 'app/superhappy.jpg' },
    { name: 'Sad', image: 'app/sad.jpg' },
    { name: 'Sad and Sick', image: 'app/sickandsad.jpg' },
    { name: 'Rotton!', image: 'app/rottentomato.jpg' }],
  snacks: [
    { name: 'Chia Seeds', health: 1, description: 'Ch-Ch-Ch-Chia' },
    { name: 'Banana', health: 5, description: 'B-A-N-A-N-A-S!' },
    { name: 'Kale', health: 10, description: 'What the Kale?!' },
    { name: 'Starburst', health: -2, description: 'Juicy!' },
    { name: 'Cookies', health: -7, description: 'Cookie Monster!' },
    { name: 'Pizza!', health: -15, description: 'Pizza Party!' }
  ]
}

let appElem = document.getElementById('food-buttons')

function drawButtons() {
  let buttonTemplate = ''
  for (let i = 0; i < chrissy.snacks.length; i++) {
    let button = chrissy.snacks[i];
    buttonTemplate += `
    <div class="food-buttons">
      <button onclick="eat(${button.health})">${button.name}</button>
    </div>
    `
  }
  document.getElementById('food-buttons').innerHTML = buttonTemplate
}

function update() {
  let template = ''
  // need to access photo from array
  template = `
  <img src="app/yoga.jpg" style="height: 250px"/>
  <h1>Chrissy</h1>
  <h4>Health: ${chrissy.healthIndex}</h4>
  <h4>Snacks: ${chrissy.foodCount}</h4>
  `
  document.getElementById('chrissy-stats').innerHTML = template
}


function reset() {
  chrissy.foodCount = 0
  chrissy.healthIndex = 100
  update()
}

function eat(healthIndex) {
  chrissy.foodCount++
  chrissy.healthIndex = chrissy.healthIndex + healthIndex
  update()
}

drawButtons()
update()

// ${ chrissy.moodsHappy[Image] } TRANSLATE A NAME TO A LITERAL TO EXECUTE