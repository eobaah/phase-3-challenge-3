let cartBtn = document.getElementById("cart-button")
let cartCounter = document.getElementById("cart-item-count")
let modal = document.querySelector(".modal-container")
let modalOverlay = document.querySelector(".modal-overlay")
let closeBtn = document.querySelector(".close-btn")
let showTotalPrice = document.querySelector(".modal-total-price")
let addToCartBtn = document.querySelectorAll("li button")
let modalItems = document.querySelector(".modal-items")
let clearCartBtn = document.querySelector(".modal-footer button")
let itemsArray = []
let totalPrice

cartBtn.addEventListener("click", openModal)
closeBtn.addEventListener("click", closeModal)
clearCartBtn.addEventListener("click", clearCart)

function openModal() {
  modalOverlay.classList.add("show-modal")
  modal.classList.add("show-modal")
}

function closeModal() {
  modalOverlay.classList.remove("show-modal")
  modal.classList.remove("show-modal")
}

addToCartBtn.forEach( element => {
  element.addEventListener("click", getItemData)
})

function getItemData(element) {
  let childNodes = element.target.parentElement.childNodes
  let name = childNodes[1].innerHTML
  let price = childNodes[3].innerHTML
  if ( !name || !price) {
    alert("You have an error")
    return
  }
  itemsArray.push( { name,price } )
  cartCounter.innerHTML = itemsArray.length
  getTotalPrice()
  showTotalPrice.innerHTML = "$" + totalPrice.toFixed(2)

  const modalItemsRow = document.createElement("DIV")

  const itemNameNode = document.createElement("SPAN");
  const itemNameTextNode = document.createTextNode(name);
  itemNameNode.appendChild(itemNameTextNode);
  modalItemsRow.appendChild(itemNameNode);

  const itemPriceNode = document.createElement("SPAN");
  const itemPriceAmtNode = document.createTextNode(price);
  itemPriceNode.appendChild(itemPriceAmtNode);
  modalItemsRow.appendChild(itemPriceNode);

  modalItems.appendChild(modalItemsRow);
}

function getSum(total, num ) {
  num = Number(num.price[0]) ?
  Number(num.price) :
  Number(num.price.slice(1))
  console.log(num)
  return total + num
}

function getTotalPrice() {
  totalPrice = itemsArray.reduce(getSum, 0)
  return totalPrice
}

function clearCart() {
  while (modalItems.firstChild) {
    modalItems.removeChild(modalItems.firstChild);
  }
  itemsArray = []
  showTotalPrice.innerHTML = "$0.00"
  cartCounter.innerHTML = "0"
}
