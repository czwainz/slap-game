import SlapController from './components/SlapController.js'

//slapController is being called by html (an instance of SlapController class)

class App {
  constructor() {
    this.controllers = {
      slapController: new SlapController()
    }
  }
}



//ATTACHES APP TO THE DOM
//nothing will work if you forget this********
//structure will be pretty much the same as this

window.app = new App()