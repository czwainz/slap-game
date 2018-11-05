let chrissy = {
  foodCount: 0, //foodcount increases on click and goes from 0 to ???//
  healthIndex: 100, //health is 100 which goes up/down based on food//
  // moods change based on health index, snacks change health index
  moods: [
    { name: 'Rotten!', image: 'app/rottentomato.jpg' },
    { name: 'Sad and Sick', image: 'app/sickandsad.jpg' },
    { name: 'Sad', image: 'app/sad.jpg' },
    { name: 'Yoga', image: 'app/yoga.jpg' },
    { name: 'Happy', image: 'app/happy.jpg' },
    { name: 'Super Happy', image: 'app/superhappy.jpg' },
    { name: 'So Healthy!', image: 'app/likesohealthy.png' }
  ],
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

// this function iterates over the chrissy.snacks to draw snack buttons
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
drawButtons()

//this function updates chrissy-stats
function update(index) {
  let template = ''
  template = `
  <img src="${chrissy.moods[index].image}" style="height: 250px"/>
  <h1>Chrissy</h1>
  <h4>Health: ${chrissy.healthIndex}</h4>
  <h4>Snacks: ${chrissy.foodCount}</h4>
  `
  document.getElementById('chrissy-stats').innerHTML = template
}

function reset() {
  chrissy.foodCount = 0
  chrissy.healthIndex = 100
  changePics()
  update()
}

function eat(healthIndex) {
  chrissy.foodCount++
  chrissy.healthIndex += healthIndex
  changePics()
  update()
}

//this function updates pictures based on healthIndex
function changePics() {
  let out = ''
  if (chrissy.healthIndex >= 200) {
    update(6)
    return
  } else if (chrissy.healthIndex >= 175) {
    update(5)
    return
  } else if (chrissy.healthIndex >= 125) {
    update(4)
    return
  } else if (chrissy.healthIndex >= 75) {
    update(3)
    return
  } else if (chrissy.healthIndex >= 25) {
    update(2)
    return
  } else if (chrissy.healthIndex >= 1) {
    update(1)
    return
  } else if (chrissy.healthIndex == 0) {
    update(0)
    return
  }
  document.getElementById('chrissy-stats').innerHTML = out
}
changePics()



// STRETCH GOALLLL

//this function is to say that if snack count gets to high, you feel sick
// function snackOverload() {
//   if (chrissy.foodCount = 25)
//     return
// }
// update photo to show Jim Carey Hurling https://tenor.com/view/gross-vomit-sick-sickening-jim-carrey-gif-7731496
