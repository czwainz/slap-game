var health = 100;

let snowman = {
  name: "Yeti",
  statesOfHealth: ['happy', 'damaged', 'under avalanche'],
  // tolerance: 5,
  images: []
}

function snowball() {
  health -= 5
  update()
}

function icePick() {
  health -= 10
  update()
}

function avalanche() {
  health -= 25
  update()
}

function update() {
  if (health > 75) {
    document.getElementById("health").innerText = snowman.statesOfHealth[0]
  } else {
    document.getElementById("health").innerText = snowman.statesOfHealth[1]
  }
}