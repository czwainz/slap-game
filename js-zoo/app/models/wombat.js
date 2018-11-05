export default class Wombat {
  constructor(name, favFood) {
    if (!name || !favFood) {
      throw new Error('Must provide valid properties when creating animal')
    }
    this.name = name
    this.favFood = favFood
    this.predator = false
  }
  eat(food) {
    console.log(`${this.name} likes to eat ${food}`)
  }
}