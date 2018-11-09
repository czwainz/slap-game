import RealEstate from "../../models/realestate.js";

let _houses = []

export default class RealEstateService {
  addHouse(formData) {
    let newHouse = new RealEstate(formData)
    _houses.push(newHouse)
  }
  getHouses() {
    return _houses
  }
}


// new RealEstate('Nampa', 200000, 3, 1)