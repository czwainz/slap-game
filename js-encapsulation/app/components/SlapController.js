import SlapService from "./SlapService.js";

//Connect service
let slapService = new SlapService()

//data outside of the exported classes is private
//can only be accessed by SlapController

//THIS keyword is accessed by whatever file is sent and can be manipulated
function drawHealth(health) {
  document.getElementById('health').innerHTML = health
}

//functions that edit data will look like this
export default class SlapController {
  constructor() {
    console.log('MAKING CONTROLLER')
  }
  slap() {
    let newHealth = slapService.slap()
    drawHealth(newHealth)
  }
}


//when function in class is a method