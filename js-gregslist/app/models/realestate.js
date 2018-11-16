export default class House {
  constructor(data) {
    debugger
    if (!data.hasOwnProperty('bedrooms') || !data.hasOwnProperty('bathrooms') || !data.hasOwnProperty('imgUrl') || !data.hasOwnProperty('levels') || !data.hasOwnProperty('year') || !data.hasOwnProperty('price') || !data.hasOwnProperty('description')) {
      throw new Error('Invalid Real Estate Creation')
    }
    this._id = data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.imgUrl = data.imgUrl
    this.levels = data.levels
    this.year = data.year
    this.price = data.price
    this.description = data.description
  }
}