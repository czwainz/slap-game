import Taco from "../models/Taco.js"

//PRIVATE

let Chicken = new Taco('Flour', 'Chicken')
let Carnitas = new Taco('Flour', 'Carnitas')
let Beef = new Taco('Corn', 'Beef')

let tacoTruck = [Chicken, Carnitas, Beef]


//PUBLIC

export default class TacoService {
  addTotalTacos() {
    debugger
    console.log(2)
    // tacoTruck.total += 1
    // return tacoTruck.total
  }
}