import VendService from "./VendService.js";

//PRIVATE

let vendService = new VendService()


function drawTotal(val) {
  console.log(4)
  document.getElementById('change').innerText = val
}

function drawProducts() {
  let products = vendService.getProducts()
  let template = ''
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.quantity > 0) {

      template += `
      <div>
      <p>${product.name} -  ${product.price}</p>
      <button onclick="app.controllers.vendController.vendItems(${i})">BUY</button>
      </div>
      `
    }
  }
  document.getElementById('products').innerHTML = template
}



//PUBLIC

export default class VendController {
  drawProducts() {
  }
  addQuarter() {
    console.log(1)
    let total = vendService.addQuarter()
    console.log(3)
    drawTotal(total)
  }
  vendItem() {
    vendService.vendItem(productIndex)
  }
}
