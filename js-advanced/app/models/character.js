//export must have import (this case, in main.js)
//export default means you dont have to have curly braces on 
//can only use export default when you export one thing
export class Character {
  constructor(name, weapon, favFood) {
    if (!name || !weapon || !favFood) {
      //throw new Error (class) to show an error when constructor not complete (forgot a property)
      throw new Error("Must provide valid properties when creating a character")
    }
    this.name = name
    this.weapon = weapon
    this.favFood = favFood
  }
  //function only avail to Character
  eat(food) {
    if (food == this.favFood) {
      console.log('COWABUNGA')
    }
    console.log(`${this.name} is eating ${food}`)
  }
}