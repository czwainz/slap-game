import ItemInMachine from "./ItemInMachine.js"


let Frito = new ItemInMachine('Fritos', 1, 3, "https://banner2.kisspng.com/20180620/pez/kisspng-fritos-corn-chip-potato-chip-tortilla-chip-frito-l-5b2ae69d69e737.1645901215295382054338.jpg")

let Tab = new ItemInMachine('Tab', .75, 10, "https://banner2.kisspng.com/20180409/rhw/kisspng-tab-fizzy-drinks-diet-drink-diet-coke-coca-cola-coke-5acb2327e8b0b5.7803427715232622479531.jpg")

let MtnDew = new ItemInMachine('Mountain Dew', 1, 1, "https://vignette.wikia.nocookie.net/mountaindew/images/0/03/Img-mountaindew.png/revision/latest?cb=20140914212459")

let products = [Frito, Tab, MtnDew]

export default class VendingMachine {
  constructor(totalMoney) {
    this.totalMoney = totalMoney
    this.products = products
    this.currentTransaction = 0
  }
}
