//PRIVATE 
import VendingMachine from "../models/VendingMachine.js";


//use classes for each new product 
//products have images - when vended display new image
let vendMachine = new VendingMachine(100, [{
  name: 'Fritos',
  price: 1,
  quantity: 3
}, {
  name: 'Cheetos',
  price: .75,
  quantity: 10
}, {
  name: 'Mt. Dew',
  price: .1,
  quantity: 1
}
])



//PUBLIC
export default class VendService {
  addQuarter() {
    console.log(2)
    vendMachine.currentTransaction += .25
    return vendMachine.currentTransaction
  }
  vendItem(productIndex) {
    let product = vendMachine.products[productIndex]
    //if exists we have some and we have some and you have enough money 
    if (product && product.quantity > 0 && vendMachine.currentTransaction >= product.price) {
      this.processTransaction(product)
      return JSON.parse(JSON.stringify(product))
    }
    return false
  }
  processTransaction(product) {
    product.quantity--
    vendMachine.totalMoney += product.price
    vendMachine.currentTransaction -= product.price

  }
  getProducts() {
    //breaks reference in memory to protect code (only reference types)
    return JSON.parse(JSON.stringify(vendMachine.products))
  }
}