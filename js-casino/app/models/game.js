export default class Game {
  constructor(name, minBet, decks, players) {
    if (!name || !minBet || !decks || !players) {
      throw new Error('Must provide valid properties when creating a game.')
    }
    this.name = name
    this.minBet = minBet
    this.type = 'table'
    this.decks = decks
    this.players = players
  }
  play(name, bet) {
    console.log(`${this.name} has a minimum bet of ${bet}`)
  }
}

//what if i want to add a max bet to both classes