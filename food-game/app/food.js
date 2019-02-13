let chrissy = {
  foodCount: 0, //foodcount increases on click and goes from 0 to ???//
  healthIndex: 100, //health is 100 which goes up/down based on food//
  // moods change based on health index, snacks change health index
  minHeath: 0,
  moods: [
    { name: 'Rotten!', img: 'app/rottentomato.jpg' },
    { name: 'Sad and Sick', img: 'app/sickandsad.jpg' },
    { name: 'Sad', img: 'app/sad.jpg' },
    { name: 'Yoga', img: 'app/yoga.jpg' },
    { name: 'Happy', img: 'app/happy.jpg' },
    { name: 'Super Happy', img: 'app/superhappy.jpg' },
    { name: 'So Healthy!', img: 'app/likesohealthy.png' }
  ],
  snacks: [
    { name: 'Chia Seeds', health: 1, description: 'Ch-Ch-Ch-Chia' },
    { name: 'Bananas', health: 5, description: 'B-A-N-A-N-A-S!' },
    { name: 'Kale Salad', health: 10, description: 'What the Kale?!' },
    { name: 'Starbursts', health: -2, description: 'Juicy!' },
    { name: 'Cookies', health: -7, description: 'Cookie Monster!' },
    { name: 'Pizza', health: -15, description: 'Pizza Party!' }
  ]
}

let appElem = document.getElementById('food-buttons')

// this function iterates over the chrissy.snacks to draw snack buttons
function drawButtons() {
  let buttonTemplate = ''
  for (let i = 0; i < chrissy.snacks.length; i++) {
    let button = chrissy.snacks[i];
    buttonTemplate += `
    <div class="food-buttons d-flex justify-content-center">
      <button class="btn btn-secondary my-1 shadow-sm food" onclick="eat(${button.health})">${button.name}</button>
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
  <img src="${chrissy.moods[index].img}" style="max-width: 13rem; height: auto; border: 1px solid gray" class="shadow-lg"/>
  <h2 class="my-2"><strong>Chrissy</strong></h1>
  <h5>Health: ${chrissy.healthIndex}</h5>
  <h5>Snacks: ${chrissy.foodCount}</h5>
  `
  document.getElementById('chrissy-stats').innerHTML = template
}

function reset() {
  document.querySelectorAll('button.food').forEach(button => button.removeAttribute('disabled'))
  chrissy.foodCount = 0
  chrissy.healthIndex = 100
  changePics()
  update(chrissy.healthIndex)
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
    chrissy.healthIndex = 200
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
  } else if (chrissy.healthIndex <= 0) {
    document.querySelectorAll('button.food').forEach(button => button.setAttribute('disabled', "true"))
    chrissy.healthIndex = 0
    update(0)
    return
  }
  document.getElementById('chrissy-stats').innerHTML = out
}
changePics()


//this function is to say that if snack count gets to high, you feel sick
// function snackOverload() {
//   let out = ''
//   out = `<img src="https://tenor.com/view/gross-vomit-sick-sickening-jim-carrey-gif-7731496" />`
//   if (chrissy.foodCount == 25) {
//     return document.getElementById('hurl').innerHTML = out
//   }
// }
// snackOverload()
// window.setTimeout(snackOverload, 5000)

// update photo to show Jim Carey Hurling https://tenor.com/view/gross-vomit-sick-sickening-jim-carrey-gif-7731496
