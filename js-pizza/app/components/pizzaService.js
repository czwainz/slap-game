//private
import Pizza from "../models/pizza.js";
import Topping from "../models/topping.js";

let _pizza

let _toppings = [
  new Topping('Green Peppers', .5),
  new Topping('Pepperoni', 1.5),
  new Topping('Pineapple', 1),
  new Topping('Banana Peppers', .5),
  new Topping('Sausage', 1.5)
]

//public
export default class PizzaService {
  constructor() {
    console.log('PIZZA SERVICE')
  }
  getTotal() {
    for (let i = 0; i < _pizza.toppings.length; i++) {
      let topping = _pizza.toppings[i];
      _pizza.price += topping.price
    }
    //loop over pizzatoppings and add price to total then return total
    return _pizza.price
  }


  addPizza(data) {
    let toppings = []
    for (let i = 0; i < _toppings.length; i++) {
      const topping = _toppings[i];
      if (data[i].checked) {
        toppings.push(topping)
      }
    }
    let newPizza = new Pizza(toppings);
    _pizza = newPizza;
    // let newTopping = {}
    // for (let i = 0; i < _toppings.length; i++) {
    //   let topping = _toppings[i];
    //   if (name == topping.name) {
    //     newTopping = topping
    //   }
    // }
  }
}
// _pizza.price += newTopping.price


//NOW: newTopping equals the correct topping object 
// create a method on pizza class to handle this and pass the newTopping to this method

//optionally add the topping to the pizza's toppings array property