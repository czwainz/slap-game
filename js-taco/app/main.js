import TacoController from "./components/TacoController.js"

class App {
  constructor() {
    this.controllers = {
      tacoController: new TacoController()

    }
  }
}
console.log(1)

// @ts-ignore
window.app = new App


