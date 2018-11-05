export default class Giraffe {
  constructor(name, favFood) {
    if (!name || !favFood) {
      throw new Error('You need to provide all of the information to continue')
    }
    this.name = name
    this.favFood = favFood
    this.predator = false
  }
  eat(food) {
    console.log(`${this.name} is eating ${food}.`)
  }
}