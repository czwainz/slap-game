var health = 100;

let snowman = {
  name: "Yeti",
  hits: 0,
  statesOfHealth: ['Happy', 'Scared!', 'Under Avalanche', 'In Igloo'],
  items: [],
  images: ['', '', '', 'assets.igloo.jpg']
}

function snowball() {
  snowman.hits++
  health -= 1 - addMods()
  update()
}

function icePick() {
  snowman.hits++
  health -= 5 - addMods()
  update()
}

function avalanche() {
  snowman.hits++
  health -= 10 - addMods()
  update()
}

function reset() {
  health = 100
  snowman.statesOfHealth[0]
  snowman.hits = 0
  update()
}

let items = {
  softCooler: { name: 'Soft Cooler', modifier: 2, description: "STOP" },
  rambler: { name: 'Rambler', modifier: 5, description: "STOP" },
  hardCooler: { name: 'Hard Cooler', modifier: 15, description: "I'm Going In the Cooler!" }
}

function addSoftCooler() {
  snowman.items.push(items.softCooler)
  console.log(snowman.items)
}

function addRambler() {
  snowman.items.push(items.rambler)
  snowman.items.push(items.softCooler)
  console.log(snowman.items)
}

function addHardCooler() {
  snowman.items.push(items.hardCooler)
}

function addMods() {
  let out = 0
  for (let index = 0; index < snowman.items.length; index++) {
    const item = snowman.items[index];
    out += item.modifier
  }
  snowman.items = []
  return out
}

function update() {
  document.getElementById("health-level").innerText = "Health Level: " + health
  document.getElementById('hits').innerText = "Hits: " + snowman.hits
  if (health > 75) {
    document.getElementById('health').innerText = snowman.statesOfHealth[0]
  } else if (health > 40) {
    document.getElementById('health').innerText = snowman.statesOfHealth[1]
  } else if (health < 25) {
    document.getElementById('health').innerText = snowman.statesOfHealth[2]
    // need to change to igloo pic bc yeti goes into igloo
    // } else if (health == 0 || snowman.hits == 20) {
    //   document.getElementById('health').innerText = snowman.images[3]
  }
}