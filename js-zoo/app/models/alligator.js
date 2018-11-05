export default class Alligator {
  constructor(name, favFood) {
    if (!name || !favFood) {
      throw new Error('Must provide valid properties when creating animal')
    }
    this.name = name
    this.favFood = favFood
    this.predator = true
  }
  eat(food) {
    console.log(`${this.name} is eating ${food}.`)
  }
  // hunt(animal) {
  //   if (animal.predator == false) {
  //     console.log(`${this.name} is hunting ${animal}`)
  //   } else {
  //     console.log(``)
  //   }
  // }
} 