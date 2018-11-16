import RealEstateService from './realestate-service.js';
//PRIVATE

let _realEstateService = new RealEstateService()

let houses = []

function _collectHouses(_houses) {
  houses = _houses;
}

//PUBLIC 

export default class RealEstateController {
  constructor() {
    _realEstateService.getHouses(_collectHouses)
  }

  showHouses() {
    let houses = _realEstateService.houses
    let realEstateTemplate = ''
    let formTemplate = ''
    houses.forEach(house => {
      realEstateTemplate += `
      <div class="col-sm-4 my-1">
          <div class="card">
            <img class="card-img-top" src="${house.imgUrl}" />
            <div class="card-text">
            <h4>Bed/Bath: ${house.bedrooms}/${house.bathrooms}</h4>
            <h6>Levels: ${house.levels}</h6>
            <h6>Year Built: ${house.year}</h6>
                <h6>Price: ${house.price}</h6>
                <p>${house.description}</p>
                <div>
                  <i class="fa fa-fw fa-trash action muted" onclick="app.controllers.autosController.destroyAuto('${house._id}')"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    })
    formTemplate += `
    <form onsubmit="app.controllers.realEstateController.addHouse(event)">
      <div class="form-group">
        <label for="bedrooms">Bedrooms</label>
        <input type="number" name="bedrooms" />
      </div>
      <div class="form-group">
        <label for="bathrooms">Bathrooms:</label>
        <input type="number" name="bathrooms" />
      </div>
      <div class="form-group">
        <label for="imgUrl">Image:</label>
        <input type="url" name="imgUrl" />
      </div>
      <div class="form-group">
        <label for="year">Year:</label>
        <input type="number" name="year" />
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input type="number" name="price" />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea type="text" name="description"></textarea>
      </div>
      <button type="submit">Add House</button>
    </form>`
    document.getElementById('main-content').innerHTML = realEstateTemplate
    document.getElementById('form-content').innerHTML = formTemplate
  }

  addHouse(event) {
    event.preventDefault();
    let form = event.target
    let formData = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      imgUrl: form.imgUrl.value,
      levels: form.levels.value,
      year: form.years.value,
      price: form.price.value,
      description: form.description.value
    }
    _realEstateService.addHouse(formData, this.showHouses)
    form.reset()
  }
  destroyHouse(id) {
    _realEstateService.destroyHouse(id, this.showHouses)
  }
}