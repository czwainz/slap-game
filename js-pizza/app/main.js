import PizzaController from "./components/pizzaController.js";


class App {
  constructor() {
    this.controllers = {
      pizzaController: new PizzaController()
    }
  }
}

window.app = new App()