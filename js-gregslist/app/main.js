import AutosController from "./components/autos/autos-controller.js";
import RealEstateController from "./components/realestate/realestate-controller.js";
import JobController from "./components/jobs/jobs-controller.js";

class App {
  constructor() {
    console.log('the app is working?!')
    this.controllers = {
      autosController: new AutosController(),
      realEstatesController: new RealEstateController(),
      jobsController: new JobController()
    }
  }
}


window.app = new App()

//separation of concerns, each controller has diff info