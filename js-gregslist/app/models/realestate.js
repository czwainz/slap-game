export default class RealEstate {
  constructor(data) {
    if (!data.location || !data.price || !data.bedrooms || !data.bathrooms) {
      throw new Error('Must provide all real estate information')
    }
    this.location = data.location
    this.price = data.price
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
  }
}