export default class Cat {
  constructor(name, favFood, predator) {
    if (!name || !favFood || !predator) {
      throw new Error('Must provide valid properties when creating animal')
    }
    this.name = name
    this.favFood = favFood
    this.predator = predator
  }
  eat(food) {
    console.log(`${this.name} is eating ${food}`)
  }
} 