import Game from "./models/game.js";
import Slot from "./models/slot.js";

let cardGames = [
  new Game('Single Deck Blackjack', 25, 1, 6),
  new Game('Double Deck Blackjack', 15, 2, 6),
  new Game('Poker', 2, 1, 10),
  new Game('Shoe Blackjack', 5, 8, 6),
  new Game('Pai Gow', 15, 2, 6)]

let funGames = [
  new Game('Roulette', 10, 0, 8),
  new Game('Craps', 5, 0, 16)
]

let tableGames = [...cardGames, ...funGames]

let penny = [
  new Slot('Invaders of Planet Moolah', .3, 'penny'),
  new Slot('Buffalo', .6, 'penny'),
  new Slot('Hot Shot', .3, 'penny')
]

let nickel = [
  new Slot('Keno', .25, 'nickel'),
  new Slot('Video Poker', .25, 'nickel'),
  new Slot('Da Ji Da Li', .25, 'nickel')
]

let quarter = [
  new Slot('Gold Hot Shot', 1.25, 'quarter'),
  new Slot('Video Poker', 1.25, 'quarter')
]

let dollar = [
  new Slot('Wheel Of Fortune', 1, 'dollar'),
  new Slot('Platinum Hot Shot', 5, 'dollar')
]

let slotMachines = [...penny, ...nickel, ...quarter, ...dollar]

for (let i = 0; i < tableGames.length; i++) {
  let gaming = tableGames[i];
  gaming.play('Blackjack', 15)
}

//can use to extrapilate data but not necessarily change things
//how to add things to make more 