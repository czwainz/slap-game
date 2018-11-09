import AutosService from "./autos-service.js";
//PRIVATE
let _autosService = new AutosService()


//PUBLIC
export default class AutosController {
  constructor() {
  }

  showAutos() {
    console.log('autobots assemble')
    //got info from autoservice
    let autos = _autosService.getAutos()
    let template = ''

    //want to format the div so add it in template
    autos.forEach(auto => {
      template +=
        `<div class="col card">
        <img src="${auto.img}">
        <h5>${auto.year} - ${auto.make} ${auto.model} </h5>
        <p>Miles: ${auto.miles}</p>
        <p>Price: ${auto.price}</p>
      </div>
      `
    })

    document.getElementById('main-content').innerHTML = template
  }
  addAuto(event) {
    event.preventDefault(); //prevents page from reloading
    let form = event.target //the element that triggers the event
    let formData = {
      make: form.make.value, //pulled from user input
      model: form.model.value, //name of field changes
      year: form.year.value, //form data pretty much looks like this
      miles: form.miles.value,
      price: form.PRICE.value,
      description: form.description.value,
      img: form.img.value
    }
    _autosService.addAuto(formData)
    this.showAutos()
    form.reset()
  }

}