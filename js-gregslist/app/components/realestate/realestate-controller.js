import RealEstateService from './realestate-service.js';
//PRIVATE

let _realEstateService = new RealEstateService()

//PUBLIC 

export default class RealEstateController {
  constructor() { }

  showHouses() {
    let houses = _realEstateService.getHouses()
    let template = ''
    houses.forEach(house => {
      template += `
        <div class="col card">
          <h4>Location: ${house.location}</h4>
          <h6>Price: ${house.price}</h6>
          <p>Bed/Bath: ${house.bedrooms}/${house.bathrooms}</p>
      </div>
      `
    })
    document.getElementById('main-content').innerHTML = template
  }
  addHouse(event) {
    event.preventDefault();
    let form = event.target
    let formData = {
      location: form.location.value,
      price: form.price.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value
    }
    _realEstateService.addHouse(formData)
    this.showHouses()
    form.reset()
  }
}