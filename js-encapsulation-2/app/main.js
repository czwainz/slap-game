import VendController from "./components/VendController.js"

//this is where you add other imports or controllers

class App {
  constructor() {
    this.controllers = {
      vendController: new VendController()
    }
  }
}

window.app = new App()