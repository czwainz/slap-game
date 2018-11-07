export default class Slot {
  constructor(name, minBet, type) {
    if (!name || !minBet || !type) {
      throw new Error('Must provide valid properties when creating a slot machine.')
    }
    this.name = name
    this.minBet = minBet
    this.type = type
    this.decks = 0
    this.players = 1
  }
  play(slot) {
    console.log(`${this.name} is a ${this.type} machine`)
  }
}

//can i construct objects with different features, like decks of cards vs type of game