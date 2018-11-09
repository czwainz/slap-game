import Taco from "../models/Taco.js"

//PRIVATE

let Chicken = new Taco('Flour', 'Chicken')
let Carnitas = new Taco('Flour', 'Carnitas')
let Beef = new Taco('Corn', 'Beef')

let tacoTruck = [Chicken, Carnitas, Beef]


//PUBLIC

export default class TacoService {
  constructor() {
    console.log(3)
  }
}