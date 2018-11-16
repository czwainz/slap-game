import House from "../../models/realestate.js";

let _api = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/houses"
})


let _houses = []

function handleError(err) {
  throw new Error(err)
}

export default class RealEstateService {

  destroyHouse(id, showHouses) {
    _api.delete(id)
      .then(res => {
        this.getHouses(showHouses)
      })
      .catch(handleError)
  }

  addHouse(formData, showHouses) {
    if (!formData) {
      throw new Error("You must supply form data")
    }
    if (typeof showHouses != 'function') {
      throw new Error("You must supply a success function")
    }
    _api.post('', formData)
      .then(res => {
        this.getHouses(showHouses)
      })
      .catch(handleError)
  }
  getHouses(_collectHouses) {
    _api.get('')
      .then(res => {
        _houses = res.data.data.map(item => new House(item))
        _collectHouses(_houses)
      })
      .catch(handleError)
  }
  get houses() {
    return _houses
  }
}