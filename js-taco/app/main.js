import TacoController from "./components/TacoController.js";

class App {
  constructor() {
    this.controllers = {
      tacoController: new TacoController()
    }
  }
}


// @ts-ignore
window.app = new App


