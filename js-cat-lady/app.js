let homeboy = {
  name: 'HomeBoy',
  pets: 0,
  moodIndex: 0,
  petTypes: [{ type: 'scratch-ears', value: 1 }, { type: 'pet-belly', value: 3 }, { type: 'pet-tail', value: 5 }],
  moods: ['Happy', 'Upset', 'Feral'],
  tolerance: 3,
  images: ['https://images.unsplash.com/photo-1531549216498-80e1dc380632?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=52dbb34d8432394b636903fa7842534f&auto=format&fit=crop&w=666&q=80', 'https://images.unsplash.com/photo-1533721587810-c854c944ddd0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=01db43d06978e2e9e52675d5d81e1d21&auto=format&fit=crop&w=1868&q=80', 'https://images.unsplash.com/photo-1528089129176-3dd4a57f6461?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93a683655229a269db24e3284acf4b38&auto=format&fit=crop&w=2110&q=80']
}

function reset() {
  homeboy.pets = 0
  homeboy.moodIndex = 0
  draw()
}

function pet(petNum) {
  homeboy.pets += petNum
  //checks if the pet is a multiple of the tolerance, and if the cat has more moods to go 
  if (homeboy.pets % homeboy.tolerance == 0 && homeboy.moods.length - 1 > homeboy.moodIndex) {
    homeboy.moodIndex++
  }
  draw()
}

function draw() {
  let template = `
    <img src="${homeboy.images[homeboy.moodIndex]}" style="height: 200px"/>
    <h2>Name: ${homeboy.name}</h2>
    <h3>Pets: ${homeboy.pets}</h3>
    <h3>Mood: ${homeboy.moods[homeboy.moodIndex]}</h3>
    `
  document.getElementById('cat-stats').innerHTML = template
}

function drawButtons() {
  //This is the default for loops of objects
  let template = ''
  for (let i = 0; i < homeboy.petTypes.length; i++) {
    let ptype = homeboy.petTypes[i];
    template += `
    <button onlick="pet(${ptype.value})">${ptype}</button>
    `
  }
  document.getElementById('pet-buttons').innerHTML = template
}


draw()
drawButtons()