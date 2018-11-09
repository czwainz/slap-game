//private
import PizzaService from "./pizzaService.js";

let _pizzaService = new PizzaService()

function drawTotal() {
  let total = _pizzaService.getTotal()
  document.getElementById('total').innerHTML = total
}

//public
export default class PizzaController {
  constructor() {
    console.log("PIZZA CONTROLLER")
  }
  addPizza(event) {
    event.preventDefault()
    let form = event.target;

    _pizzaService.addPizza(form);
    drawTotal()
  }
}
